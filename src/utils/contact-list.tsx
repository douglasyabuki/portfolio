import { Icons, type IconOption } from '@/icons/Icons';

type ContactMode = 'whatsapp' | 'mail' | 'form';

interface Contact {
  mode: ContactMode;
  name: string;
  content: string;
  Icon: React.ReactElement;
  iconName: IconOption;
  href: string;
  routing: boolean;
  newPage: boolean;
}

export const contactList: Contact[] = [
  {
    mode: 'whatsapp',
    name: 'Whatsapp',
    content: '(41)99953-0599',
    Icon: <Icons.Whatsapp />,
    iconName: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=5541999530599',
    routing: false,
    newPage: true,
  },
  {
    mode: 'mail',
    name: 'E-mail',
    content: 'douglasyabuki@gmail.com',
    Icon: <Icons.Envelope />,
    iconName: 'Envelope',
    href: 'mailto:douglasyabuki@gmail.com',
    routing: false,
    newPage: false,
  },
  {
    mode: 'form',
    name: 'Leave a message',
    content: 'Complete the Form to leave a message',
    Icon: <Icons.PaperPlane />,
    iconName: 'PaperPlane',
    href: '#contact-form',
    routing: true,
    newPage: false,
  },
];
