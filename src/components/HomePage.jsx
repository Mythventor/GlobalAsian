import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Map, Heart, ChevronDown } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-indigo-900 h-96 md:h-screen max-h-screen-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-900/40 z-10"></div>
          <div className="bg-[url('/api/placeholder/1200/800')] bg-cover bg-center absolute inset-0 opacity-40"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Vietnamese Boat People: A Journey of Hope and Resilience
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Documenting the stories, history, and legacy of Vietnamese refugees who sought freedom across treacherous seas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/stories" 
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                  Read Stories
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 bg-white text-indigo-800 font-medium rounded-lg hover:bg-indigo-50 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Preserving History, Sharing Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Narratives</h3>
              <p className="text-stone-600">
                First-hand accounts from Vietnamese refugees who sought safety and a new beginning in Canada and beyond.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Map className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Historical Context</h3>
              <p className="text-stone-600">
                Understanding the historical, political, and social factors that led to one of the largest refugee crises of the 20th century.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Legacy</h3>
              <p className="text-stone-600">
                Exploring how Vietnamese communities have contributed to and enriched Canadian society and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest from our Blog</h2>
            <Link 
              to="/blog" 
              className="text-indigo-600 font-medium hover:text-indigo-800 transition flex items-center"
            >
              View All <ChevronDown size={16} className="ml-1 transform rotate-270" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-[url('/api/placeholder/400/300')] bg-cover bg-center"></div>
                <div className="p-6">
                  <div className="text-indigo-600 text-sm font-medium mb-2">April 10, 2025</div>
                  <h3 className="text-xl font-semibold mb-3">The Journey to Canadian Shores</h3>
                  <p className="text-stone-600 mb-4">
                    Examining the perilous sea journeys undertaken by Vietnamese refugees in the late 1970s and early 1980s.
                  </p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Preserve These Important Stories</h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Do you have a story to share? Are you a researcher, historian, or simply interested in contributing?
          </p>
          <Link 
            to="/contact"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;