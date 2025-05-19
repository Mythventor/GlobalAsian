import React from 'react';
import { Link } from 'react-router-dom';

const BibliographyPage = () => {
  const books = [
    {
      title: "Passage to Freedom: The Vietnamese-Canadian Experience",
      author: "Peter Nguyen",
      year: "2004",
      publisher: "Canadian Historical Press",
      description: "A comprehensive history of Vietnamese refugees in Canada, focusing on their arrival, settlement, and integration into Canadian society."
    },
    {
      title: "The Vietnamese Boat People: A Canadian Response",
      author: "Michael Molloy",
      year: "2017",
      publisher: "McGill-Queen's University Press",
      description: "An examination of Canada's response to the Vietnamese refugee crisis and the implementation of the Private Sponsorship Program."
    },
    {
      title: "From Vietnam to Canada: A Journey of Hope",
      author: "Lan Nguyen",
      year: "2010",
      publisher: "University of Toronto Press",
      description: "A collection of oral histories from Vietnamese refugees who settled in various communities across Canada."
    }
  ];

  const articles = [
    {
      title: "Building a Vietnamese Community in Canada: A Case Study of Toronto",
      author: "Thi Nguyen",
      year: "2012",
      publisher: "Journal of Canadian Studies",
      description: "An academic analysis of how Vietnamese refugees established communities and cultural institutions in Toronto."
    },
    {
      title: "The Impact of Private Sponsorship on Vietnamese Refugee Integration",
      author: "Robert Vanderclay",
      year: "2015",
      publisher: "Canadian Journal of Sociology",
      description: "A study examining how the private sponsorship model affected the integration outcomes for Vietnamese refugees in Canada."
    }
  ];

  return (
    <div>
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bibliography</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Primary and secondary sources on Vietnamese boat people in Canada.
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
                  {books.map((book, index) => (
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
                  {articles.map((article, index) => (
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
                <Link to="/submit-resource" className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition block text-center">
                  Suggest a Resource
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BibliographyPage;