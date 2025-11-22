import { CopyRight } from './copyright/Copyright';
import { Navigation } from './navigation/Navigation';
import { Platforms } from './platforms/Platforms';

export const Footer = () => {
  return (
    <footer className="glass-panel border-t border-white/10 py-12">
      <div className="container-max flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <Navigation />
          <Platforms />
        </div>
        <CopyRight />
      </div>
    </footer>
  );
};
