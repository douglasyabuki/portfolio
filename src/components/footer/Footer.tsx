import { Contact } from './contact/Contact';
import { CopyRight } from './copyright/Copyright';
import { Navigation } from './navigation/Navigation';
import { Platforms } from './platforms/Platforms';

export const Footer = () => {
  return (
    <footer className="px-corners relative flex h-auto w-screen flex-col gap-4 bg-black py-4 duration-150">
      <Platforms />
      <div className="flex flex-col gap-4 py-2">
        <Navigation />
        <Contact />
      </div>
      <CopyRight />
    </footer>
  );
};
