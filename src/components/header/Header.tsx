// Const
import { navigationList } from './navigation/navigation-list/navigation-list';
import { socialList } from './social/social-list/social-list';

// Components
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import Social from './social/Social';

// Header main function
export default function Header() {
  // Returns the whole header to App.tsx
  return (
    <header className="group container fixed top-0 z-30 flex h-11 w-screen min-w-full justify-between bg-gradient-to-b from-background-black to-transparent px-8 py-1 text-center text-not-so-white duration-500 hover:bg-background-black sm:px-14 md:h-16 md:px-16 md:py-2 lg:px-20">
      <Logo></Logo>
      <Social list={socialList}></Social>
      <Navigation list={navigationList}></Navigation>
    </header>
  );
}
