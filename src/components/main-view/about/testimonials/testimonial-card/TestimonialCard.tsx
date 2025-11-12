import { Divider } from '@/components/ui/divider/Divider';
import { Icons } from '@/icons/Icons';
import type { TestimonialItem } from '@/utils/testimonial-list';

export const TestimonialCard = ({ position, relation, testimonial, href }: TestimonialItem) => {
  return (
    <div className="group bg-background-primary relative flex h-[29.5rem] w-[18.75rem] scale-90 flex-col rounded-xl p-4 text-center shadow-lg shadow-black/10 duration-150 hover:scale-95 max-lg:m-auto sm:p-7 md:h-[35rem] md:w-[25rem] md:p-8 lg:h-[29.5rem] lg:w-[18.75rem] lg:p-4 xl:h-[37.5rem] xl:w-[25rem] xl:p-8">
      <div className="relative flex h-auto flex-col items-start text-center">
        <span className="text-purplish-gray/20 flex size-12">
          <Icons.QuoteLeft />
        </span>
        <p className="text-base leading-snug tracking-tighter text-pretty opacity-80 md:text-xl lg:text-base xl:text-xl">
          {testimonial}
        </p>
        <div className="flex w-full items-center justify-end">
          <span className="text-purplish-gray/20 right-0 bottom-0 flex size-12">
            <Icons.QuoteRight />
          </span>
        </div>
      </div>
      <div className="flex h-auto flex-1 flex-col items-center justify-end self-stretch py-3 text-nowrap">
        <Divider className="mb-4" />
        <a
          href={href}
          className="relative flex size-18 rounded-full"
          onContextMenu={(e) => e.preventDefault()}
          target="_blank"
        >
          <Icons.CircleUser className="absolute opacity-100 duration-150 group-hover:opacity-0" />
          <Icons.Chain className="absolute opacity-0 duration-150 group-hover:opacity-100" />
        </a>
        <h2 className="text-xl md:text-4xl lg:text-xl xl:text-4xl xl:tracking-tight">{position}</h2>
        <h3 className="text-lg opacity-50 md:text-3xl lg:text-xl xl:text-3xl xl:tracking-tight">
          {relation}
        </h3>
      </div>
    </div>
  );
};
