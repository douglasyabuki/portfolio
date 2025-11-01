type CSSSupports = {
  supports: (property: string, value?: string) => boolean;
};

export const isValidColor = (value?: string): value is string => {
  if (!value) return false;

  const css = (globalThis as unknown as { CSS?: CSSSupports }).CSS;
  if (css?.supports && css.supports('color', value)) {
    return true;
  }

  const hex = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
  const oklch =
    /^oklch\(\s*\d+(?:\.\d+)?%?\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?(?:\s*\/\s*(?:0|1|0?\.\d+))?\s*\)$/i;
  const rgb = /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i;
  const hsl =
    /^hsla?\(\s*\d{1,3}(?:\.\d+)?\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i;

  return hex.test(value) || oklch.test(value) || rgb.test(value) || hsl.test(value);
};
