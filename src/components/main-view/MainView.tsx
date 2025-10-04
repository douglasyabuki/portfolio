import { useOnMount } from '@/hooks/use-on-mount';
import { useSectionsObserver } from '@/hooks/use-sections-observer';
import { initializeLocationId, scrollToCurrentLocationId } from '@/utils/dom-utils';
import { navigationList } from '@/utils/navigation-list';
import { useEffect } from 'react';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Home } from './home/Home';
import { Projects } from './projects/Projects';
import { Resume } from './resume/Resume';

const syncViewAndUrl = true;

export const MainView = () => {
  useOnMount(() => initializeLocationId('home'));

  useEffect(() => {
    window.addEventListener('hashchange', scrollToCurrentLocationId);
    return () => window.removeEventListener('hashchange', scrollToCurrentLocationId);
  }, []);

  const { activeId } = useSectionsObserver(
    navigationList.map(({ id }) => id),
    {},
    syncViewAndUrl,
  );

  return (
    <div className="flex h-full w-screen flex-col items-center" data-active={activeId ?? ''}>
      <Home />
      <div className="bg-section-divider-primary" />
      <About />
      <div className="bg-section-divider-secondary" />
      <Resume />
      <div className="bg-section-divider-primary" />
      <Projects />
      <div className="bg-section-divider-secondary" />
      <Contact />
    </div>
  );
};
