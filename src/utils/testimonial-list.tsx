export interface TestimonialItem {
  position: string;
  relation: string;
  testimonial: string;
  href: string;
}

export const testimonialList: TestimonialItem[] = [
  {
    position: 'CFO',
    relation: 'Direct manager',
    testimonial:
      'Excellent professional, experienced with systems and reports. Does not limit himself to user needs but seeks to understand the needs of all departments!',
    href: 'https://www.linkedin.com/in/marcelo-masao-i-80597631/',
  },
  {
    position: 'IT Manager',
    relation: 'Direct manager',
    testimonial:
      'Extremely focused and with a unique determination. Always devoted and unwavering to his tasks. He had a high level of rapport with all departments, high adaptability and invariably open to constructive criticisms. Tenacity and appetite for knowledge are his main qualities',
    href: 'https://www.linkedin.com/in/marcus-vinicius-pinto-favoreto-a450b090/',
  },
  {
    position: 'Academic Director',
    relation: 'Indirect senior',
    testimonial:
      'I am pleased to recommend Douglas Yuji Yabuki. I was in direct contact with him and I can attest to his competence. During the period we worked together, he proved himself dedicated, intelligent and reliable. Professional and responsible behavior, polite and affable!',
    href: 'https://www.linkedin.com/in/ana-cl%C3%A1udia-moreira-melo-toyofuku-a458162a/',
  },
];
