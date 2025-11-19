import { platformList } from '@/data/platforms';

export const Platforms = () => {
  return (
    <div className="flex -translate-x-1 gap-2">
      {platformList.map(({ platform, Icon, href }) => (
        <a
          key={platform}
          href={href}
          className={
            'text-white-primary hover:bg-white-primary hover:text-black-primary hover:shadow-white-primary/40 flex size-8 items-center justify-center rounded-full p-1 duration-150 ease-in-out hover:shadow-lg lg:size-9'
          }
        >
          {Icon}
        </a>
      ))}
    </div>
  );
};
