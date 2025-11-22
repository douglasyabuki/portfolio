import { navigationList } from '@/data/navigation';
import { scrollToId } from '@/utils/dom-utils';

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {navigationList.map(({ name, link }) => (
          <li key={name}>
            <a
              href={link}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link);
              }}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-white"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
