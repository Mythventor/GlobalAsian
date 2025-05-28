import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Map, Heart, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import blogPostsData from '../data/blogPostsData';

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
                Vietnamese Boat People:<br></br> {' '}
                <TypeAnimation
                  sequence={[
                    'A Journey of Hope', 
                    2000,
                    'A Story of Resilience', 
                    2000,
                    'A Legacy of Courage', 
                    2000,
                    'A Journey of Hope and Resilience',
                    5000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  cursor={false}
                  className="text-indigo-300"
                />
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                <TypeAnimation
                  sequence={[
                    'Documenting the stories, history, and legacy of Vietnamese refugees in Canada',
                    5000,
                  ]}
                  wrapper="span"
                  speed={75}
                  cursor={false}
                  repeat={1}
                />
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
          <h2 className="text-3xl font-bold text-center mb-12">
            <TypeAnimation
              sequence={[
                'Preserving History, Sharing Stories',
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={1}
            />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg transform transition duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Narratives</h3>
              <p className="text-stone-600">
                First-hand accounts from Vietnamese refugees who sought safety and a new beginning in Canada and beyond.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg transform transition duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Map className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Historical Context</h3>
              <p className="text-stone-600">
                Understanding the historical, political, and social factors that led to one of the largest refugee crises of the 20th century.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg transform transition duration-300 hover:scale-105">
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
            <h2 className="text-3xl font-bold">
              <TypeAnimation
                sequence={[
                  'Latest from our Blog',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                repeat={1}
              />
            </h2>
            <Link 
              to="/blog" 
              className="text-indigo-600 font-medium hover:text-indigo-800 transition flex items-center"
            >
              View All <ChevronDown size={16} className="ml-1 transform rotate-270" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.featuredImage})` }}></div>
                <div className="p-6">
                  <div className="text-indigo-600 text-sm font-medium mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-stone-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                'Help Us Preserve These Important Stories',
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={1}
            />
          </h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Do you have a story to share? Are you a researcher, historian, or simply interested in contributing?
          </p>
          <Link 
            to="https://docs.google.com/forms/d/e/1FAIpQLSfDgWp4BNzOeXKUtqM4pMQKU2S37uuYldk9J3qKmHCKx7ZoGA/viewform?usp=header"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 duration-300"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;