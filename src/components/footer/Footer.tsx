import { Contact } from './contact/Contact';
import { CopyRight } from './copyright/Copyright';
import { Navigation } from './navigation/Navigation';
import { Platforms } from './platforms/Platforms';

export const Footer = () => {
  return (
    <footer className="bg-black-primary relative flex h-auto min-w-full flex-col gap-4 px-8 py-4 sm:px-14 md:px-16 lg:px-20 xl:px-32">
      <Platforms />
      <div className="flex flex-col gap-4 py-2">
        <Navigation />
        <Contact />
      </div>
      <CopyRight />
    </footer>
  );
};
