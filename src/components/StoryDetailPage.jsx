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
      // Set document title to the story title
      document.title = foundStory.title;
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
          <p className="mt-2 text-lg">Loading story...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-lg">
      {/* Hero Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/stories" className="inline-flex items-center text-indigo-300 hover:text-white mb-4 text-lg">
              ← Back to Stories
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{story.title}</h1>
            <div className="flex flex-wrap gap-4 text-lg">
              <span className="bg-indigo-800 px-3 py-1 rounded-full">Arrival: {story.arrivalYear}</span>
              {story.location && (
                <span className="bg-indigo-800 px-3 py-1 rounded-full">Location: {story.location}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${story.featuredImage})` }}></div>

      {/* Story Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: story.fullStory }}></div>
            </div>

            <div className="md:col-span-1">
              {/* Related Stories */}
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Related Stories</h3>
                <ul className="space-y-4">
                  {story.relatedStories.map((relatedSlug) => {
                    const relatedStory = storiesData.find(s => s.slug === relatedSlug);
                    return relatedStory ? (
                      <li key={relatedSlug} className="pb-4 border-b border-stone-200 last:border-0">
                        <Link to={`/stories/${relatedSlug}`} className="text-indigo-600 hover:text-indigo-800 transition text-lg">
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
          <h2 className="text-4xl font-bold mb-4">Do You Have a Story to Share?</h2>
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

export default StoryDetailPage;