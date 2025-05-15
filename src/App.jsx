import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/Aboutpage';
import StoriesPage from './components/StoriesPage';
import BlogPage from './components/BlogPage';
import BibliographyPage from './components/BibliographyPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActivePage = () => {
    switch(activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutPage />;
      case 'stories':
        return <StoriesPage />;
      case 'blog':
        return <BlogPage />;
      case 'bibliography':
        return <BibliographyPage />;
      case 'contact':
        return <div>Contact Page Content</div>;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;