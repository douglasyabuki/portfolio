import { IconButton } from '@/components/ui/buttons/icon-button/IconButton';
import { Dropdown } from '@/components/ui/dropdown/Dropdown';
import { MenuItem } from '@/components/ui/menu/menu-item/MenuItem';
import { navigationList } from '@/data/navigation';
import { useTargetRect } from '@/hooks/use-target-rect';
import { Icons } from '@/icons/Icons';
import { scrollToId } from '@/utils/dom-utils';

export const Navigation = () => {
  const { targetRect, getTargetRect, clearTargetRect, componentRef } = useTargetRect();
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
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link);
              }}
              className="flex w-24 items-center justify-center gap-1"
            >
              <span className="size-5">{Icon}</span>
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div ref={componentRef}>
        <IconButton
          Icon={<Icons.Bars />}
          className="text-white-primary size-9 p-1 opacity-50 duration-150 hover:opacity-100 focus:opacity-100 md:size-12 lg:hidden"
          onClick={getTargetRect}
        />
      </div>
      <Dropdown
        offsetY={10}
        targetRect={targetRect}
        onClose={clearTargetRect}
        className="bg-translucid-black text-white-primary z-50 rounded-lg py-2 shadow-xl shadow-black/10 backdrop-blur-sm duration-150"
      >
        {navigationList.map(({ name, Icon, link }) => (
          <li key={`header-${name}`}>
            <MenuItem
              className="hover:text-white-primary/80 relative justify-start gap-4 duration-150 select-none hover:underline"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link);
                clearTargetRect();
              }}
              href={link}
            >
              <span className="size-5">{Icon}</span>
              {name}
            </MenuItem>
          </li>
        ))}
      </Dropdown>
    </div>
  );
};
