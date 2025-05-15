import React from 'react';

const StoriesPage = () => {
  return (
    <div>
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Personal narratives from Vietnamese refugees who sought new beginnings across the sea.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[url('/api/placeholder/600/400')] h-80 bg-cover bg-center rounded-lg shadow-lg"></div>
            <div>
              <div className="text-indigo-600 text-sm font-medium mb-2">Featured Story</div>
              <h2 className="text-3xl font-bold mb-4">Escape to Freedom: The Tran Family</h2>
              <p className="text-lg text-stone-600 mb-4">
              After three failed attempts, the Tran family finally reached Australian shores in 1981, beginning a new chapter in Sydney.
              </p>

              <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                Read Full Story
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((story) => (
              <div key={story} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-[url('/api/placeholder/400/300')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Escape to Freedom: The Tran Family</h3>
                  <p className="text-stone-600 mb-4">
                    After three failed attempts, the Tran family finally reached Australian shores in 1981, beginning a new chapter in Sydney.
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
    </div>
  );
};

export default StoriesPage;