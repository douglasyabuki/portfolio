import React from 'react';

import type { SvgEl } from '@/types/common';

const attrNameToReact = (name: string) => {
  if (name === 'class') return 'className';
  if (name === 'for') return 'htmlFor';
  if (name.startsWith('aria-') || name.startsWith('data-')) return name;

  if (name.includes(':')) {
    const [ns, local] = name.split(':');
    if (ns && local) return ns + local[0].toUpperCase() + local.slice(1);
  }

  const map: Record<string, string> = {
    class: 'className',
    for: 'htmlFor',
    tabindex: 'tabIndex',
    viewbox: 'viewBox',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-opacity': 'strokeOpacity',
    'fill-opacity': 'fillOpacity',
    'vector-effect': 'vectorEffect',
    'paint-order': 'paintOrder',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'clip-path': 'clipPath',
    'mask-type': 'maskType',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'flood-opacity': 'floodOpacity',
    'letter-spacing': 'letterSpacing',
    'word-spacing': 'wordSpacing',
    'text-anchor': 'textAnchor',
    'dominant-baseline': 'dominantBaseline',
    'alignment-baseline': 'alignmentBaseline',
    'baseline-shift': 'baselineShift',
    'shape-rendering': 'shapeRendering',
    'text-rendering': 'textRendering',
    'image-rendering': 'imageRendering',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'marker-start': 'markerStart',
    'marker-mid': 'markerMid',
    'marker-end': 'markerEnd',
    'xlink:href': 'xlinkHref',
    href: 'href',
    'xml:space': 'xmlSpace',
    'xml:lang': 'xmlLang',
    'xmlns:xlink': 'xmlnsXlink',
  };

  const hit = map[name.toLowerCase()];
  if (hit) return hit;

  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
};

const attrsToProps = (attrs: NamedNodeMap) => {
  const props: Record<string, unknown> = {};
  for (let i = 0; i < attrs.length; i++) {
    const a = attrs.item(i)!;
    const key = attrNameToReact(a.name);
    if (key === 'style' && a.value && a.value.includes(':')) {
      const obj: Record<string, string> = {};
      a.value.split(';').forEach((rule) => {
        const [k, v] = rule.split(':');
        if (!k || v == null) return;
        const jsKey = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        obj[jsKey] = v.trim();
      });
      props[key] = obj;
    } else {
      props[key] = a.value;
    }
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

export const prefixSvgIds = (svg: string, prefix: string) => {
  svg = svg.replace(/\bid="([^"]+)"/g, (_m, id) => `id="${prefix}${id}"`);
  svg = svg.replace(/\burl\(#([^)]+)\)/g, (_m, id) => `url(#${prefix}${id})`);
  svg = svg.replace(
    /\b(xlink:href|href)="#([^"]+)"/g,
    (_m, attr, id) => `${attr}="#${prefix}${id}"`,
  );

  return svg;
};
