import { Carousel } from '@/components/ui/carousel/Carousel';
import { testimonialList } from '@/data/testimonials';
import type { TestimonialItem } from '@/types/testimonial';
import { TestimonialCard } from './testimonial-card/TestimonialCard';

export const Testimonials = () => {
  return (
    <div className="subsection gap-20">
      <h1 className="text-center! text-3xl font-bold duration-150 md:text-4xl xl:text-5xl 2xl:text-6xl">
        Testimonials
      </h1>
      <div className="flex w-full lg:hidden">
        <Carousel
          list={testimonialList}
          render={({ href, position, relation, testimonial }: TestimonialItem) => (
            <TestimonialCard
              key={`testimonial-card-${position}`}
              href={href}
              position={position}
              relation={relation}
              testimonial={testimonial}
            />
          )}
          getId={(item) => `testimonial-card-${item.position}`}
          loop={true}
        />
      </div>
      <div className="hidden w-full items-center justify-center lg:flex">
        {testimonialList.map(({ href, position, relation, testimonial }: TestimonialItem) => (
          <TestimonialCard
            key={`testimonial-card-${position}`}
            href={href}
            position={position}
            relation={relation}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};
