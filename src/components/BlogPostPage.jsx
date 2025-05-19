import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogPostsData from '../data/blogPostsData';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the post that matches the slug from the URL
    const foundPost = blogPostsData.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      setLoading(false);
      // Set document title to the post title
      document.title = foundPost.title;
    } else {
      // If no post is found, redirect to the blog page
      navigate('/blog', { replace: true });
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-2 text-lg">Loading post...</p>
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
            <Link to="/blog" className="inline-flex items-center text-indigo-300 hover:text-white mb-4 text-lg">
              ← Back to Blog
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-indigo-200 text-lg">
              <span>{post.date}</span>
              <span>•</span>
              <Link to={`/blog/category/${post.category.toLowerCase()}`} className="bg-indigo-800 px-3 py-1 rounded-full text-white hover:bg-indigo-700 transition">
                {post.category}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${post.featuredImage})` }}></div>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              {/* Tags */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag} 
                      to={`/blog/tag/${tag}`}
                      className="bg-stone-100 px-3 py-1 rounded-full text-stone-600 hover:bg-stone-200 transition text-lg"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              {/* Related Posts */}
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  {post.relatedPosts.map((relatedSlug) => {
                    const relatedPost = blogPostsData.find(p => p.slug === relatedSlug);
                    return relatedPost ? (
                      <li key={relatedSlug} className="pb-4 border-b border-stone-200 last:border-0">
                        <Link to={`/blog/${relatedSlug}`} className="text-indigo-600 hover:text-indigo-800 transition text-lg">
                          {relatedPost.title}
                        </Link>
                        <p className="text-stone-600 text-lg mt-1">{relatedPost.date}</p>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-2xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest stories, research, and events about Vietnamese-Canadian history and communities.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg border-y border-l border-stone-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-r-lg hover:bg-indigo-700 transition text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;