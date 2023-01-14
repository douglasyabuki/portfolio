// Components
import EducationCard from './education-card/EducationCard';
import EducationImgBoard from './education-img-board/EducationImgBoard';

// Interfaces
import { IEducation } from '../../../../interfaces/IEducation';
import { IImage } from '../../../../interfaces/IImage';

// Props destructuring
interface Props {
  list: IEducation[];
  imgList: IImage[];
}

// Education main function
export default function Education({ list, imgList }: Props) {

  // Exports whole Education section to Resume.tsx
  return (
    <div className="w-auto space-y-12 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl text-center lg:text-left">Education</h1>
      <div className="block w-full h-auto lg:flex justify-between xl:gap-4 items-center">
        <div className='block container w-full mb-4 lg:mb-0 xl:space-y-2 2xl:space-y-6'>
          {list.map((item) => (
            <EducationCard item={item} key={item.id}></EducationCard>
          ))}
        </div>
        <div className='container'>
            <EducationImgBoard list={imgList}></EducationImgBoard>
        </div>
      </div>
    </div>
  );
}
