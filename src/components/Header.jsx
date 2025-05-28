import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Get current active section from URL path
  const getActiveSection = (pathname) => {
    if (pathname === '/') return 'home';
    return pathname.substring(1); // Remove the leading slash
  };
  
  const activeSection = getActiveSection(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'timeline', label: 'Timeline', path: '/timeline' },
    { id: 'blog', label: 'History', path: '/blog' },
    { id: 'stories', label: 'Stories', path: '/stories' },
    { id: 'bibliography', label: 'Bibliography', path: '/bibliography' },
    { id: 'about', label: 'About Us', path: '/about' },
  ];

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-indigo-800 hover:text-indigo-600 transition"
          >
            Vietnamese Journeys
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.id}
              to={item.path} 
              className={`font-medium transition hover:text-indigo-600 ${activeSection === item.id ? 'text-indigo-600' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {navItems.map(item => (
              <Link 
                key={item.id}
                to={item.path} 
                className="block w-full text-left py-2 font-medium hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;