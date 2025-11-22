import { navigationList } from '@/data/navigation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useOnMount } from '@/hooks/use-on-mount';
import { useSectionsObserver } from '@/hooks/use-sections-observer';
import { Icons } from '@/icons/Icons';
import { initializeLocationId, scrollToCurrentLocationId } from '@/utils/dom-utils';
import { useEffect, useMemo } from 'react';
import { FloatingButton } from '../ui/buttons/floating-button/FloatingButton';
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

  const { containerRef, isVisible: isPageTopVisible } = useIntersectionObserver();

  const sectionIds = useMemo(() => navigationList.map(({ id }) => id), []);

  const { activeId } = useSectionsObserver(sectionIds, {}, syncViewAndUrl);

  return (
    <div className="flex w-full flex-col items-center" data-active={activeId ?? ''}>
      <div className="absolute top-0 left-0 h-1 w-1 bg-transparent" ref={containerRef} />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <FloatingButton
        isVisible={!isPageTopVisible}
        className="glass-panel group/scroll-to-top-button fixed right-8 bottom-8 z-[49] flex items-center justify-center rounded-full p-3 text-white opacity-50 shadow-lg transition-all hover:scale-110 hover:opacity-100"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icons.ArrowUp className="h-6 w-6 duration-150 group-hover/scroll-to-top-button:animate-bounce" />
      </FloatingButton>
    </div>
  );
};
