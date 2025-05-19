import React from 'react';
import { Link } from 'react-router-dom';
import storiesData from '../data/storiesData';

const StoriesPage = () => {
  return (
    <div className="text-lg">
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Stories</h1>
          <p className="text-2xl text-indigo-100 max-w-3xl">
            Personal narratives from Vietnamese refugees who sought new beginnings in Canada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesData.map((story) => (
              <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${story.featuredImage})` }}></div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                      {story.arrivalYear}
                    </span>
                    {story.location && (
                      <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                        {story.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{story.title}</h3>
                  <p className="text-stone-600 mb-4 text-lg">
                    {story.description}
                  </p>
                  <Link to={`/stories/${story.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition text-lg">
                    Read Full Story →
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
          <h2 className="text-4xl font-bold mb-4">Share Your Story</h2>
          <p className="text-2xl text-stone-600 mb-8 max-w-2xl mx-auto">
            We're collecting stories from Vietnamese refugees and their descendants across Canada. Your experience is an important part of our shared history.
          </p>
          <Link to="/submit-story" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition text-lg">
            Submit Your Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;