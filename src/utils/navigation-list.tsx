import { Icons } from '@/icons/Icons';

interface NavigationItem {
  name: string;
  link: string;
  Icon: React.ReactElement;
}

export const navigationList: NavigationItem[] = [
  {
    name: 'Home',
    link: '#home',
    Icon: <Icons.House />,
  },
  {
    name: 'About',
    link: '#about',
    Icon: <Icons.CircleUser />,
  },
  {
    name: 'Resume',
    link: '#resume',
    Icon: <Icons.File />,
  },
  {
    name: 'Projects',
    link: '#projects',
    Icon: <Icons.Rocket />,
  },
  {
    name: 'Contact',
    link: '#contact',
    Icon: <Icons.VCard />,
  },
];
