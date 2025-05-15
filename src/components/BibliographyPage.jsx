import React from 'react';

const BibliographyPage = () => {
  return (
    <div>
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bibliography</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Academic resources, books, articles, and reference materials on Vietnamese boat people.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">Books</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Book title",
                      author: "Author Name",
                      year: "Year",
                      publisher: "Publisher",
                      description: "A collection of oral histories from Vietnamese women who settled in Australia."
                    },
                    {
                      title: "Book title",
                      author: "Author Name",
                      year: "Year",
                      publisher: "Publisher",
                      description: "A collection of oral histories from Vietnamese women who settled in Australia."
                    },
                    {
                      title: "Book title",
                      author: "Author Name",
                      year: "Year",
                      publisher: "Publisher",
                      description: "A collection of oral histories from Vietnamese women who settled in Australia."
                    }
                  ].map((book, index) => (
                    <div key={index} className="pb-6 border-b border-stone-200 last:border-0">
                      <h3 className="text-xl font-bold text-indigo-800">{book.title}</h3>
                      <p className="text-stone-600 mb-2">{book.author} ({book.year}), {book.publisher}</p>
                      <p className="text-stone-600">{book.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">Academic Articles</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Article title",
                      author: "Author Name",
                      year: "Year",
                      publisher: "Publisher",
                      description: "A collection of oral histories from Vietnamese women who settled in Australia."
                    },
                    {
                      title: "Article title",
                      author: "Author Name",
                      year: "Year",
                      publisher: "Publisher",
                      description: "A collection of oral histories from Vietnamese women who settled in Australia."
                    }
                  ].map((article, index) => (
                    <div key={index} className="pb-6 border-b border-stone-200 last:border-0">
                      <h3 className="text-xl font-bold text-indigo-800">{article.title}</h3>
                      <p className="text-stone-600 mb-2">{article.author} ({article.year}), {article.publisher}</p>
                      <p className="text-stone-600">{article.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-stone-50 p-6 rounded-lg mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Resource Categories</h3>
                <ul className="space-y-2">
                  {[
                    "Books", 
                    "Academic Articles", 
                    "Documentaries", 
                    "Oral Histories", 
                    "Government Reports", 
                    "News Archives",
                    "Photographs",
                    "Personal Documents"
                  ].map((category) => (
                    <li key={category}>
                      <button className="text-indigo-600 hover:text-indigo-800 transition">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contribute Resources</h3>
                <p className="text-stone-600 mb-4">
                  Do you know of important resources that should be included in our bibliography?
                </p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                  Suggest a Resource
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BibliographyPage;