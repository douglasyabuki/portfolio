import { type IconOption } from '@/icons/Icons';

export type ContactMode = 'whatsapp' | 'mail' | 'form';

export interface Contact {
  mode: ContactMode;
  name: string;
  content: string;
  Icon: React.ReactElement;
  iconName: IconOption;
  href: string;
  routing: boolean;
  newPage: boolean;
}
