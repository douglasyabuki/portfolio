import { navigationList } from '@/utils/navigation-list';
import { scrollOnClick } from '@/utils/scroll-on-click';

export const Navigation = () => {
  return (
    <div className="font-display text-white-primary/50 relative container my-auto flex h-auto w-auto items-center justify-end">
      <ul className="hidden lg:flex">
        {navigationList.map(({ name, Icon, link }) => (
          <li
            className="hover:text-white-primary/80 relative duration-150 select-none hover:underline"
            key={`header-${name}`}
          >
            <a
              href={link}
              onClick={() => scrollOnClick(link)}
              className="flex w-24 items-center justify-center gap-1"
            >
              <span className="size-5">{Icon}</span>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
