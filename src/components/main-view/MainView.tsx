import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useOnMount } from '@/hooks/use-on-mount';
import { useSectionsObserver } from '@/hooks/use-sections-observer';
import { Icons } from '@/icons/Icons';
import { initializeLocationId, scrollToCurrentLocationId } from '@/utils/dom-utils';
import { navigationList } from '@/utils/navigation-list';
import { useEffect } from 'react';
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

  const { activeId } = useSectionsObserver(
    navigationList.map(({ id }) => id),
    {},
    syncViewAndUrl,
  );

  return (
    <div className="flex h-full w-screen flex-col items-center py-12" data-active={activeId ?? ''}>
      <div className="absolute top-0 left-0 size-1 bg-transparent" ref={containerRef} />
      <Home />
      <div className="bg-section-divider-primary" />
      <About />
      <div className="bg-section-divider-secondary" />
      <Resume />
      <div className="bg-section-divider-primary" />
      <Projects />
      <div className="bg-section-divider-secondary" />
      <Contact />
      <FloatingButton
        isVisible={!isPageTopVisible}
        className="group/scroll-to-top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icons.ArrowUp className="duration-150 group-hover/scroll-to-top-button:animate-bounce group-focus/scroll-to-top-button:animate-bounce" />
      </FloatingButton>
    </div>
  );
};
