import { educationList } from '@/data/education';
import { EducationCard } from './education-card/EducationCard';

const imgList = [
  {
    src: '/studying.jpg',
    alt: 'From Gery Wibowo on Unsplash',
  },
  {
    src: '/studying2.jpg',
    alt: 'From Scott Graham on Unsplash',
  },
  {
    src: '/graduation.jpg',
    alt: 'My own graduation at UFPR',
  },
];

export const Education = () => {
  return (
    <div className="subsection">
      <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
        Education
      </h1>
      <div className="mx-auto flex w-full max-w-[120rem] flex-col items-center justify-between gap-12 py-20 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="flex flex-col gap-8">
          {educationList.map(({ degree, iconName, href, institution, status }) => (
            <EducationCard
              key={degree}
              href={href}
              iconName={iconName}
              title={institution}
              status={status}
              content={degree}
            />
          ))}
        </div>
        <div className="grid-parent h-auto w-full md:h-[30rem]">
          {imgList.map((item, id) => (
            <div
              key={item.alt}
              className={`grid-div${id + 1} flex h-48 w-full overflow-hidden rounded-xl md:h-full`}
            >
              <img
                className="h-full w-full object-cover shadow-sm shadow-black/10 duration-150 hover:scale-105"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
