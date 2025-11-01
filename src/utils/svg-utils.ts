import React from 'react';

export type SvgEl = React.ReactElement<React.SVGProps<SVGSVGElement>>;

const attrNameToReact = (name: string) => {
  if (name === 'class') return 'className';
  if (name === 'for') return 'htmlFor';
  if (name.startsWith('aria-') || name.startsWith('data-')) return name;

  if (name.includes(':')) {
    const [ns, local] = name.split(':');
    if (ns && local) return ns + local[0].toUpperCase() + local.slice(1); // e.g. xml:space -> xmlSpace
  }

  const map: Record<string, string> = {
    viewbox: 'viewBox',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stop-color': 'stopColor',
    'xlink:href': 'xlinkHref',
  };

  if (map[name]) return map[name];
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
};

const attrsToProps = (attrs: NamedNodeMap) => {
  const props: Record<string, unknown> = {};
  for (let i = 0; i < attrs.length; i++) {
    const a = attrs.item(i)!;
    const key = attrNameToReact(a.name);
    props[key] = a.value;
  }
  return props;
};

const nodeToElement = (node: ChildNode, key?: React.Key): React.ReactNode => {
  const ELEMENT_NODE = 1,
    TEXT_NODE = 3,
    COMMENT_NODE = 8;
  if (node.nodeType === TEXT_NODE) return node.nodeValue;
  if (node.nodeType === COMMENT_NODE) return null;

  if (node.nodeType === ELEMENT_NODE) {
    const el = node as Element;
    const tag = el.tagName; // keep SVG tag case
    const props = { ...attrsToProps(el.attributes), key };
    const children: React.ReactNode[] = [];
    el.childNodes.forEach((child, i) => {
      const c = nodeToElement(child, i);
      if (c !== null) children.push(c);
    });
    return React.createElement(tag, props, ...children);
  }
  return null;
};

export const parseSvgStringToElement = (svgStr: string | undefined | null): SvgEl | null => {
  if (!svgStr) return null;
  if (typeof DOMParser === 'undefined') return null; // SSR guard
  const doc = new DOMParser().parseFromString(svgStr, 'image/svg+xml');
  const svg = doc.documentElement;
  if (!svg || svg.tagName.toLowerCase() !== 'svg') return null;
  return nodeToElement(svg) as SvgEl;
};

export const pickFirstAvailable = (
  obj: Record<string, string>,
  order: readonly string[],
): string | undefined => {
  for (const k of order) if (obj[k]) return obj[k];
  const first = Object.keys(obj)[0];
  return first ? obj[first] : undefined;
};

export const mergeRootSvgProps = (parsed: SvgEl, extra: React.SVGProps<SVGSVGElement>) => {
  const existing = parsed.props?.className as string | undefined;
  const incoming = extra.className as string | undefined;
  return {
    ...(parsed.props || {}),
    ...extra,
    className: [existing, incoming].filter(Boolean).join(' '),
  };
};
