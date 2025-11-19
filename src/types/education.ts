import { type IconOption } from '@/icons/Icons';

export type EducationInstitution = 'Rocketseat' | 'UNINTER' | 'UFPR' | 'Complimentary Education';
export type EducationStatus = 'In progress' | 'Concluded' | '';

export interface EducationItem {
  institution: EducationInstitution;
  degree: string;
  category: string;
  iconName: IconOption;
  status: EducationStatus;
  href?: string;
}
