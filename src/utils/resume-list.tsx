import { type IconOption } from '@/icons/Icons';

interface ResumeItem {
  language: string;
  downloadPath: string;
  FlagIconOption: IconOption;
  pdfContainerClassName?: string;
  pdfIconClassName?: string;
}

export const resumeList: ResumeItem[] = [
  {
    language: 'PT-BR',
    downloadPath: '/DOUGLAS_YABUKI_CV.pdf',
    FlagIconOption: 'BrazilFlag',
    pdfContainerClassName:
      'inset-shadow-weak-green hover:inset-shadow-strong-green has-focus:inset-shadow-strong-green',
    pdfIconClassName: 'text-green-500',
  },
  {
    language: 'EN-US',
    downloadPath: '/DOUGLAS_YABUKI_RESUME.pdf',
    FlagIconOption: 'UsaFlag',
    pdfContainerClassName:
      'inset-shadow-weak-red hover:inset-shadow-strong-red has-focus:inset-shadow-strong-red',
    pdfIconClassName: 'text-red-500',
  },
];
