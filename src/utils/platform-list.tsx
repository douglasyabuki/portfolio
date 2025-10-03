import { Icons } from '@/icons/Icons';

type Platform = 'linkedin' | 'github' | 'whatsapp';

interface Social {
  platform: Platform;
  href: string;
  Icon: React.ReactElement;
  alt: string;
}

export const platformList: Social[] = [
  {
    platform: 'linkedin',
    href: 'https://www.linkedin.com/in/douglas-yabuki/',
    Icon: <Icons.LinkedIn />,
    alt: 'linkedin logo',
  },
  {
    platform: 'github',
    href: 'https://github.com/douglasyabuki',
    Icon: <Icons.Github />,
    alt: 'github logo',
  },
  {
    platform: 'whatsapp',
    href: 'https://api.whatsapp.com/send?phone=5541999530599',
    Icon: <Icons.Whatsapp />,
    alt: 'whatsapp logo',
  },
];
