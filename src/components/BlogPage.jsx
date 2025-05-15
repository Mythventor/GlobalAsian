import React from 'react';

const BlogPage = () => {
  return (
    <div>
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Insights, research, and reflections on Vietnamese refugee experiences and history.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
                <div className="h-64 bg-[url('/api/placeholder/800/400')] bg-cover bg-center"></div>
                <div className="p-6">
                  <div className="text-indigo-600 text-sm font-medium mb-2">April 10, 2025 • History</div>
                  <h2 className="text-2xl font-bold mb-4">The Historical Context of Vietnamese Boat People</h2>
                  <p className="text-lg text-stone-600 mb-4">
                    Understanding the political and social factors that led to one of the largest refugee crises of the 20th century requires examining the complex history of Vietnam following World War II.
                  </p>
                  <p className="text-lg text-stone-600 mb-6">
                    This article explores the events leading up to the fall of Saigon in 1975 and the subsequent refugee crisis that saw over one million Vietnamese people flee their homeland.
                  </p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                    Continue Reading →
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((post) => (
                  <div key={post} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="h-40 bg-[url('/api/placeholder/400/300')] bg-cover bg-center"></div>
                    <div className="p-6">
                      <div className="text-indigo-600 text-sm font-medium mb-2">March 28, 2025 • Culture</div>
                      <h3 className="text-xl font-semibold mb-3">Vietnamese Cultural Influence in Australia</h3>
                      <p className="text-stone-600 mb-4">
                        How Vietnamese communities have enriched Australian society through cuisine, arts, and cultural practices.
                      </p>
                      <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {["First generation", "Second generation"].map((category) => (
                    <li key={category}>
                      <button className="text-indigo-600 hover:text-indigo-800 transition">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {[
                    "Remembering the First Arrivals to Darwin",
                    "Oral History Project: Voices from the Past",
                    "Second Generation Perspectives",
                    "The Role of Community Organizations"
                  ].map((post) => (
                    <li key={post} className="pb-4 border-b border-stone-200 last:border-0">
                      <button className="text-indigo-600 hover:text-indigo-800 transition">
                        {post}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-stone-600 mb-4">
                  Stay updated with our latest stories and research.
                </p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
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