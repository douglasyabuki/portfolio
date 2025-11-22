import type { EducationItem } from '@/types/education';

export const educationList: EducationItem[] = [
  {
    institution: 'Rocketseat',
    degree: 'Computer Software Engineering',
    category: 'Postgraduate degree',
    iconName: 'GraduationCap',
    status: 'In progress',
  },
  {
    institution: 'UNINTER',
    degree: 'System Analysis and Development',
    category: "Technology's degree",
    iconName: 'Cog',
    status: 'Concluded',
  },
  {
    institution: 'UFPR',
    degree: 'Civil Engineering',
    category: "Bachelor's degree",
    iconName: 'GraduationCap',
    status: 'Concluded',
  },
  {
    institution: 'Complimentary Education',
    degree: 'downloadable Resume',
    category: 'Check it out',
    iconName: 'CircleNotch',
    status: '',
    href: '#downloadable-resume',
  },
];
