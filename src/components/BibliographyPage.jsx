import React from 'react';
import { Link } from 'react-router-dom';

const BibliographyPage = () => {
  const primary_sources = [
    {
      title: "Work in progress",
      author: "",
      year: "",
      publisher: "",
      description: ""
    },
    {
      title: "Work in progress",
      author: "",
      year: "",
      publisher: "",
      description: ""
    },
    {
      title: "Work in progress",
      author: "",
      year: "",
      publisher: "",
      description: ""
    }
  ];

  const secondary_sources = [
    {
      title: "Work in progress",
      author: "",
      year: "",
      publisher: "",
      description: ""
    },
    {
      title: "Work in progress",
      author: "",
      year: "",
      publisher: "",
      description: ""
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
                <h2 className="text-2xl font-bold mb-6">Primary sources</h2>
                <div className="space-y-6">
                  {primary_sources.map((primary_source, index) => (
                    <div key={index} className="pb-6 border-b border-stone-200 last:border-0">
                      <h3 className="text-xl font-bold text-indigo-800">{primary_source.title}</h3>
                      <p className="text-stone-600 mb-2">{primary_source.author} ({primary_source.year}), {primary_source.publisher}</p>
                      <p className="text-stone-600">{primary_source.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">Secondary sources</h2>
                <div className="space-y-6">
                  {secondary_sources.map((secondary_source, index) => (
                    <div key={index} className="pb-6 border-b border-stone-200 last:border-0">
                      <h3 className="text-xl font-bold text-indigo-800">{secondary_source.title}</h3>
                      <p className="text-stone-600 mb-2">{secondary_source.author} ({secondary_source.year}), {secondary_source.publisher}</p>
                      <p className="text-stone-600">{secondary_source.description}</p>
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
                    "Primary sources",
                    "Secondary sources",
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