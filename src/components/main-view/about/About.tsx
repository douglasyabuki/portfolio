import { AboutDouglas } from './about-douglas/AboutDouglas';
import { Testimonials } from './testimonials/Testimonials';

export const About = () => {
  return (
    <section id="about" className="bg-section-secondary section">
      <AboutDouglas />
      <Testimonials />
    </section>
  );
};
