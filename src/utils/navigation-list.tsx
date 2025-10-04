import { Icons } from '@/icons/Icons';

interface NavigationItem {
  id: string;
  name: string;
  link: string;
  Icon: React.ReactElement;
}

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
