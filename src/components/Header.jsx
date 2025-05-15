import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const setSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'stories', label: 'Stories' },
    { id: 'blog', label: 'Blog' },
    { id: 'bibliography', label: 'Bibliography' },
  ];

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setSection('home')} 
            className="text-2xl font-bold text-indigo-800 hover:text-indigo-600 transition"
          >
            Vietnamese Project
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setSection(item.id)} 
              className={`font-medium transition hover:text-indigo-600 ${activeSection === item.id ? 'text-indigo-600' : ''}`}
            >
              {item.label}
            </button>
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
              <button 
                key={item.id}
                onClick={() => setSection(item.id)} 
                className="block w-full text-left py-2 font-medium hover:text-indigo-600"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;