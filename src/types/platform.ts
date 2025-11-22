export type Platform = 'linkedin' | 'github' | 'whatsapp';

export interface Social {
  platform: Platform;
  href: string;
  Icon: React.ReactElement;
  alt: string;
}
