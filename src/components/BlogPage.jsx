import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogPostsData from '../data/blogPostsData';

const BlogPage = () => {
  const { category, tag } = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterInfo, setFilterInfo] = useState(null);

  useEffect(() => {
    // Filter posts based on category or tag if provided
    if (category) {
      const filtered = blogPostsData.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredPosts(filtered);
      setFilterInfo({
        type: 'category',
        value: category.charAt(0).toUpperCase() + category.slice(1)
      });
    } else if (tag) {
      const filtered = blogPostsData.filter(post => 
        post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
      setFilteredPosts(filtered);
      setFilterInfo({
        type: 'tag',
        value: tag
      });
    } else {
      setFilteredPosts(blogPostsData);
      setFilterInfo(null);
    }
  }, [category, tag]);

  return (
    <div className="text-lg">
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {filterInfo ? `Blog: ${filterInfo.type === 'category' ? filterInfo.value : '#' + filterInfo.value}` : 'Blog'}
          </h1>
          <p className="text-2xl text-indigo-100 max-w-3xl">
            {filterInfo 
              ? `Articles ${filterInfo.type === 'category' ? 'in the ' + filterInfo.value + ' category' : 'tagged with #' + filterInfo.value}`
              : 'Insights, research, and reflections on Vietnamese refugee experiences and history in Canada.'}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {filterInfo && (
                <div className="mb-8">
                  <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 transition mb-4 inline-block text-lg">
                    ← Back to All Posts
                  </Link>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.featuredImage})` }}></div>
                    <div className="p-6">
                      <div className="text-indigo-600 text-lg font-medium mb-2">{post.date} • {post.category}</div>
                      <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-stone-600 mb-4 text-lg">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition text-lg">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {Array.from(new Set(blogPostsData.map(post => post.category))).map((category) => (
                    <li key={category} className="text-lg">
                      <Link to={`/blog/category/${category.toLowerCase()}`} className="text-indigo-600 hover:text-indigo-800 transition">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPostsData.slice(0, 4).map((post) => (
                    <li key={post.id} className="pb-4 border-b border-stone-200 last:border-0">
                      <Link to={`/blog/${post.slug}`} className="text-indigo-600 hover:text-indigo-800 transition text-lg">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-stone-600 mb-4 text-lg">
                  Stay updated with our latest stories and research.
                </p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                  />
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition text-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;