// StoryDetailPage.jsx - Complete file
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import storiesData from '../data/storiesData';

const StoryDetailPage = () => {
  const { slug } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the story that matches the slug from the URL
    const foundStory = storiesData.find(s => s.slug === slug);
    
    if (foundStory) {
      setStory(foundStory);
      setLoading(false);
    } else {
      // If no story is found, redirect to the stories page
      navigate('/stories', { replace: true });
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-2">Loading story...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/stories" className="inline-flex items-center text-indigo-300 hover:text-white mb-4">
              ← Back to Stories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{story.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-indigo-800 px-3 py-1 rounded-full">Arrived: {story.arrivalYear}</span>
              <span className="bg-indigo-800 px-3 py-1 rounded-full">Location: {story.location}</span>
              <span className="bg-indigo-800 px-3 py-1 rounded-full">Family size: {story.familyMembers}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: story.fullStory }}></div>
              
              {/* Share buttons */}
              <div className="mt-12 pt-6 border-t border-stone-200">
                <h3 className="text-xl font-bold mb-4">Share This Story</h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Email
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              {/* Image Gallery */}
              <div className="bg-stone-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Photos</h3>
                <div className="space-y-4">
                  {story.images.map((image, index) => (
                    <div key={index} className="space-y-2">
                      <div className="bg-[url('/api/placeholder/400/300')] h-48 bg-cover bg-center rounded-lg shadow-sm"></div>
                      <p className="text-sm text-stone-600">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Stories */}
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Related Stories</h3>
                <ul className="space-y-4">
                  {story.relatedStories.map((relatedSlug) => {
                    const relatedStory = storiesData.find(s => s.slug === relatedSlug);
                    return relatedStory ? (
                      <li key={relatedSlug} className="pb-4 border-b border-stone-200 last:border-0">
                        <Link to={`/stories/${relatedSlug}`} className="text-indigo-600 hover:text-indigo-800 transition">
                          {relatedStory.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Do You Have a Story to Share?</h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            We're collecting stories from Vietnamese refugees and their descendants across Canada. Your experience is an important part of our shared history.
          </p>
          <Link to="/submit-story" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Submit Your Story
          </Link>
        </div>
      </section>
    </div>
  );
};


export default StoryDetailPage;
