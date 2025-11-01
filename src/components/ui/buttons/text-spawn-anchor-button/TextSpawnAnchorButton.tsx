import { isValidColor } from '@/utils/color-utils';
import { twMerge } from 'tailwind-merge';

interface ColorConfig {
  initialBgColor?: string;
  hoverBgColor?: string;
}

interface TextSpawnAnchorButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  Icon: React.ReactNode;
  ref?: React.Ref<HTMLAnchorElement>;
  text: string;
  colorConfig?: ColorConfig;
  href: string;
}

const DEFAULT_INITIAL_BG_COLOR = '#1e1b24';
const DEFAULT_HOVER_BG_COLOR = '#19181f';

export const TextSpawnAnchorButton = ({
  className,
  colorConfig,
  href,
  Icon,
  ref,
  text,
  ...props
}: TextSpawnAnchorButton) => {
  const initial = isValidColor(colorConfig?.initialBgColor)
    ? colorConfig!.initialBgColor!
    : DEFAULT_INITIAL_BG_COLOR;

  const hover = isValidColor(colorConfig?.hoverBgColor)
    ? colorConfig!.hoverBgColor!
    : DEFAULT_HOVER_BG_COLOR;

  return (
    <a
      className={twMerge(
        'group/text-spawn-button before:hover:500 text-white-primary relative flex h-12 w-12 max-w-fit items-center justify-start gap-2 rounded-full p-2 pr-6 font-bold duration-500 before:absolute before:left-8 before:-z-10 before:h-6 before:w-6 before:rotate-45 before:duration-700 hover:w-50 before:hover:left-40',
        className,
      )}
      style={{
        backgroundColor: initial,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = initial)}
      href={href}
      ref={ref}
      target="_blank"
      {...props}
    >
      <span className="size-8 shrink-0">{Icon}</span>
      <span className="inline-flex origin-left scale-x-0 transform border-l-2 px-1 tracking-tight text-nowrap opacity-0 transition-all duration-100 group-hover/text-spawn-button:scale-x-100 group-hover/text-spawn-button:opacity-100 group-hover/text-spawn-button:delay-300 group-hover/text-spawn-button:duration-200">
        {text}
      </span>
    </a>
  );
};
