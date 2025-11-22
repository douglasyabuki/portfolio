import { navigationList } from '@/data/navigation';
import { Icons } from '@/icons/Icons';
import { scrollToId } from '@/utils/dom-utils';
import { useState } from 'react';
import { Logo } from './logo/Logo';
import { Navigation } from './navigation/Navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileNavClick = (id: string) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4 shadow-lg backdrop-blur-xl md:px-8">
      <div className="container-max mx-auto flex w-full items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block p-2 text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Icons.X className="clay-icon h-10 w-10" />
          ) : (
            <Icons.Menu className="clay-icon h-10 w-10" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 h-screen w-full bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center space-y-8 pt-20">
            {navigationList.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMobileNavClick(item.id)}
                className="hover:text-text-secondary text-2xl font-medium text-white"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
