import { ParticlesBackground } from '@/components/ui/particles-background/ParticlesBackground';
import { scrollToId } from '@/utils/dom-utils';

export const Home = () => {
  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col justify-center">
      <ParticlesBackground className="h-full w-full" />
      <div className="container-max flex min-h-screen flex-col justify-center pt-20 pb-32">
        <div className="glass-panel relative z-10 max-w-3xl rounded-3xl p-8 md:p-12">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Building the future <br />
            <span className="text-text-secondary">one pixel at a time.</span>
          </h1>
          <p className="text-text-secondary mb-10 max-w-xl text-lg md:text-xl">
            I'm Douglas Yabuki, a software engineer specializing in building exceptional digital
            experiences. Currently focused on accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToId('projects')} className="btn-primary cursor-pointer">
              View Projects
            </button>
            <button onClick={() => scrollToId('contact')} className="btn-secondary cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
