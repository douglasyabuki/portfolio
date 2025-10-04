import { scrollToId } from '@/utils/dom-utils';
import { navigationList } from '@/utils/navigation-list';

export const Navigation = () => {
  return (
    <div className="w-[15.625rem]">
      <h1 className="text-white-primary/80 w-max text-base font-semibold lg:text-xl">
        Navigate back
      </h1>
      {navigationList.map(({ name, link }) => (
        <div
          key={name}
          className="text-white-primary/50 hover:text-white-primary/80 flex justify-start text-left text-sm transition-all duration-150 hover:underline lg:text-lg"
        >
          <a
            href={link}
            onClick={(e) => {
              e.preventDefault();
              scrollToId(link);
            }}
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  );
};
