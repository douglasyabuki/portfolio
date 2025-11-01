import {
  devicons,
  PREFERRED_VARIANT_ORDER_DEVICON,
  type DeviconName,
  type DeviconVariantKey,
} from '@/libs/devicon/devicon';
import {
  mergeRootSvgProps,
  parseSvgStringToElement,
  pickFirstAvailable,
  type SvgEl,
} from '@/utils/svg-utils';
import React, { useMemo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: DeviconName;
  variant?: DeviconVariantKey;
}

export const IconParser = ({ name, variant, className, ...props }: Props) => {
  const svgStr = useMemo(() => {
    const rec = devicons[name];
    if (!rec?.svg) return undefined;
    if (variant && rec.svg[variant]) return rec.svg[variant];
    return pickFirstAvailable(rec.svg as Record<string, string>, PREFERRED_VARIANT_ORDER_DEVICON);
  }, [name, variant]);

  const parsed: SvgEl | null = useMemo(
    () => (svgStr ? parseSvgStringToElement(svgStr) : null),
    [svgStr],
  );

  if (!svgStr) return null;
  if (!parsed) return <svg {...props} className={className} />;

  const rootProps = mergeRootSvgProps(parsed, { ...props, className });
  return React.cloneElement(parsed, rootProps);
};
