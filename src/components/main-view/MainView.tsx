import { useOnMount } from '@/hooks/use-on-mount';
import { getLocationHash, scrollToId } from '@/utils/dom-utils';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Home } from './home/Home';
import { Projects } from './projects/Projects';
import { Resume } from './resume/Resume';

export const MainView = () => {
  useOnMount(() => scrollToId(getLocationHash()));

  return (
    <div className="flex h-full w-screen flex-col items-center">
      <Home />
      <div className="bg-section-divider-primary"></div>
      <About />
      <div className="bg-section-divider-secondary"></div>
      <Resume />
      <div className="bg-section-divider-primary"></div>
      <Projects />
      <div className="bg-section-divider-secondary"></div>
      <Contact />
    </div>
  );
};
