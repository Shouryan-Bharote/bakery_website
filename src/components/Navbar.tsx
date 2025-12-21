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
    <nav className="w-full bg-[#41291F]">
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
            className="md:hidden text-[#F5E6D3] hover:text-white transition-colors"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#5C3D2E]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-3 transition-colors ${
                    isActive 
                      ? 'text-white font-semibold bg-[#5C3D2E]' 
                      : 'text-[#F5E6D3] hover:text-white hover:bg-[#5C3D2E]'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
