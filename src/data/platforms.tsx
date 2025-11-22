import { Icons } from '@/icons/Icons';
import type { Social } from '@/types/platform';

export const platformList: Social[] = [
  {
    platform: 'linkedin',
    href: 'https://www.linkedin.com/in/douglas-yabuki/',
    Icon: <Icons.LinkedIn className="clay-icon" />,
    alt: 'linkedin logo',
  },
  {
    platform: 'github',
    href: 'https://github.com/douglasyabuki',
    Icon: <Icons.Github className="clay-icon" />,
    alt: 'github logo',
  },
  {
    platform: 'whatsapp',
    href: 'https://api.whatsapp.com/send?phone=5541999530599',
    Icon: <Icons.Whatsapp className="clay-icon" />,
    alt: 'whatsapp logo',
  },
];
