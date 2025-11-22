import { type IconOption } from '@/icons/Icons';

export interface ResumeItem {
  language: string;
  downloadPath: string;
  FlagIconOption: IconOption;
  pdfContainerClassName?: string;
  pdfIconClassName?: string;
}
