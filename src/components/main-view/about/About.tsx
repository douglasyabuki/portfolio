import { AboutDouglas } from './about-douglas/AboutDouglas';
import { Testimonials } from './testimonials/Testimonials';

export const About = () => {
  return (
    <section id="about" className="section container-max">
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">About Me</h2>
        <p className="text-text-secondary max-w-2xl text-lg">
          A little bit about my background, hobbies, and what others say about working with me.
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <AboutDouglas />
        <Testimonials />
      </div>
    </section>
  );
};
