import { Icons } from '@/icons/Icons';
import type { NavigationItem } from '@/types/navigation';

export const navigationList: NavigationItem[] = [
  {
    id: 'home',
    name: 'Home',
    link: '#home',
    Icon: <Icons.House />,
  },
  {
    id: 'about',
    name: 'About',
    link: '#about',
    Icon: <Icons.CircleUser />,
  },
  {
    id: 'resume',
    name: 'Resume',
    link: '#resume',
    Icon: <Icons.File />,
  },
  {
    id: 'projects',
    name: 'Projects',
    link: '#projects',
    Icon: <Icons.Rocket />,
  },
  {
    id: 'contact',
    name: 'Contact',
    link: '#contact',
    Icon: <Icons.VCard />,
  },
];
