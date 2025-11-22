import { DynamicIcon } from '@/components/ui/dynamic-icon/DynamicIcon';
import { type IconOption } from '@/icons/Icons';
import { scrollToId } from '@/utils/dom-utils';
import { twMerge } from 'tailwind-merge';

interface ContactCard {
  title: string;
  content: string;
  iconName: IconOption;
  href: string;
  newPage?: boolean;
  routing?: boolean;
}

export const ContactCard = ({ title, content, iconName, href, newPage, routing }: ContactCard) => {
  return (
    <a
      className={twMerge(
        'card-glass group/card text-white-primary flex h-auto max-h-[10.625rem] min-h-[8.75rem] min-w-fit scale-95 items-start justify-start gap-2 rounded-xl p-4 shadow-md shadow-black/10 duration-150 lg:origin-left',
        'sm:gap-4 sm:even:translate-x-10',
        'lg:min-h-[6.875rem]',
        'xl:p-4',
        '2xl:min-h-[10.3125rem]',
        'hover:scale-100 hover:shadow-lg',
      )}
      href={href}
      target={newPage ? '_blank' : '_self'}
      onClick={(e) => {
        if (routing) {
          e.preventDefault();
          scrollToId(href, false);
        }
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <span className="flex size-6 items-center justify-center duration-150 md:size-8 lg:size-6 xl:size-8">
        <DynamicIcon iconName={iconName} />
      </span>
      <div className="flex h-auto flex-1 flex-col justify-center gap-2 self-stretch xl:gap-4">
        <span className="flex items-baseline gap-4">
          <h2 className="2xl:text-4x text-xl font-bold duration-150 md:text-2xl xl:text-3xl">
            {title}
          </h2>
          <h3 className="text-lg opacity-80 duration-150 md:text-xl xl:text-2xl">{status}</h3>
        </span>
        <p className="tracking-tight xl:text-lg 2xl:text-2xl">{content}</p>
      </div>
    </a>
  );
};
