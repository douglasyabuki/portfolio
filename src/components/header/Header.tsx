import { Logo } from './logo/Logo';
import { Navigation } from './navigation/Navigation';

export const Header = () => {
  return (
    <header className="group from-black-primary text-white-primary hover:bg-black-primary shadow-translucid-black px-corners fixed top-0 z-50 flex h-11 w-screen min-w-full justify-between bg-gradient-to-b to-transparent py-1 text-center shadow-lg backdrop-blur-md duration-150 md:h-16 md:py-2">
      <Logo />
      <Navigation />
    </header>
  );
};
