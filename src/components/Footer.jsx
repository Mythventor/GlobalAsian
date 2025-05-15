import React from 'react';

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
              <li><button className="hover:text-white transition">Home</button></li>
              <li><button className="hover:text-white transition">About Us</button></li>
              <li><button className="hover:text-white transition">Stories</button></li>
              <li><button className="hover:text-white transition">Blog</button></li>
              <li><button className="hover:text-white transition">Bibliography</button></li>
              <li><button className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-indigo-200">
              <li><button className="hover:text-white transition">Oral History Archive</button></li>
              <li><button className="hover:text-white transition">Photo Gallery</button></li>
              <li><button className="hover:text-white transition">Research Papers</button></li>
              <li><button className="hover:text-white transition">Submit Your Story</button></li>
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