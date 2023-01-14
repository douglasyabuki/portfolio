// Interface
import { IEducation } from '../../../../../interfaces/IEducation';

// Props destructuring
interface Props {
  item: IEducation;
}

export default function EducationCard({ item }: Props) {
  return (
    <div
      className={`group container flex h-auto min-h-[140px] scale-90 transform rounded-xl p-4 bg-background-div1 shadow-md shadow-translucid-black duration-300 hover:scale-100 hover:shadow-lg hover:shadow-translucid-black lg:min-h-[110px] 2xl:min-h-[165px] lg:p-2 xl:p-4 ${
        item.id === 1 ? 'ml-4 md:ml-8 xl:ml-12' : 'ml-0'
      }`}
    >
      <i
        className={`${item.icon} h-min text-3xl ${
          item.current ? 'group-hover:animate-spin' : 'group-hover:animate-bounce'
        }`}
      ></i>
      <div className="block p-2 lg:p-2 xl:p-4">
        <div className="flex items-baseline gap-4">
          <h2 className="mb-2 text-xl font-bold md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl">
            {item.university}
          </h2>
          <h3
            className={
              item.university !== 'Complimentary Education'
                ? `text-lg opacity-80 md:text-xl xl:text-2xl`
                : `hidden`
            }
          >
            {item.current ? 'Current' : 'Concluded'}
          </h3>
        </div>
        <h4 className="xl:text-lg 2xl:text-2xl">{`${item.category} in ${item.degree}`}</h4>
      </div>
    </div>
  );
}
