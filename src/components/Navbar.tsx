// src/components/Navbar.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base transition-colors ${
      isActive 
        ? 'text-white font-semibold' 
        : 'text-[#F5E6D3] hover:text-white'
    }`;

  return (
    <nav className="w-full bg-[#41291F] relative z-50">
      <div className="mx-auto max-w-full px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-4xl font-bold tracking-wide text-[#F5E6D3] font-[Heyam,sans-serif] hover:text-white transition-colors"
          >
            HEYAM!
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F5E6D3] hover:text-white transition-colors z-50"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              className="h-7 w-7" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay/Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Drawer Menu - Slides from Left */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#41291F] z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#5C3D2E]">
          <NavLink 
            to="/" 
            className="text-3xl font-bold tracking-wide text-[#F5E6D3] font-[Heyam,sans-serif]"
            onClick={() => setIsMenuOpen(false)}
          >
            HEYAM!
          </NavLink>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="px-4 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-4 rounded-lg mb-2 transition-all ${
                  isActive 
                    ? 'text-white font-semibold bg-[#5C3D2E]' 
                    : 'text-[#F5E6D3] hover:text-white hover:bg-[#5C3D2E]/50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
