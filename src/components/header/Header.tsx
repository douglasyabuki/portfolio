import { Logo } from './logo/Logo';
import { Navigation } from './navigation/Navigation';

export const Header = () => {
  return (
    <header className="group from-black-primary text-white-primary hover:bg-black-primary shadow-translucid-black fixed top-0 z-50 container flex h-11 w-screen min-w-full justify-between bg-gradient-to-b to-transparent px-8 py-1 text-center shadow-lg backdrop-blur-md duration-150 sm:px-14 md:h-16 md:px-16 md:py-2 lg:px-20 xl:px-32">
      <Logo />
      <Navigation />
    </header>
  );
};
