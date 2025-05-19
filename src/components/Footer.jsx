import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Vietnamese Journeys</h3>
            <p className="text-indigo-200">
              Documenting the stories, history, and legacy of Vietnamese refugees.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-indigo-200">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/stories" className="hover:text-white transition">Stories</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/bibliography" className="hover:text-white transition">Bibliography</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-indigo-200">
              <li><Link to="/oral-history" className="hover:text-white transition">Oral History Archive</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition">Photo Gallery</Link></li>
              <li><Link to="/research" className="hover:text-white transition">Research Papers</Link></li>
              <li><Link to="/submit-story" className="hover:text-white transition">Submit Your Story</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} Asian-Am 216 S25 Team 11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;