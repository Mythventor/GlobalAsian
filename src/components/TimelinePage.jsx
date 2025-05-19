import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from './Timeline';

const TimelinePage = () => {
  // Updated to include Canadian-specific events
  const timelineEvents = [
    {
      id: 'event-1967',
      year: '1967',
      title: 'Merit-based points system',
      description: 'Canada introduces a merit-based points system, reducing national biases in immigration selection',
      imagePosition: 'right'
    },
    {
      id: 'event-1975',
      year: 'April 30, 1975',
      title: 'Fall of Saigon and Initial Refugee Wave',
      description: 'Saigon falls to North Vietnamese forces, marking the end of the Vietnam War. Canada received 3,000 Vietnamese refugees in the immediate aftermath.',
      imagePosition: 'left'
    },
    {
      id: 'event-1976',
      year: '1976',
      title: 'Canadian Immigration Act of 1976',
      description: 'The Canadian Immigration Act recognizes refugees as a distinct class of immigrants and establishes a private sponsorship program',
      imagePosition: 'right'
    },
    {
      id: 'event-1979',
      year: '1976-1978',
      title: 'Growing international concern ',
      description: 'Refugees began fleeing Vietnam by sea in larger numbers, giving rise to the term "Boat People".',
      imagePosition: 'left'
    },
    {
      id: 'event-1979',
      year: '1979',
      title: 'Policy shifts',
      description: 'Canada responds to international pressure and the growing humanitarian crisis. The government accepted 50,000 refugees from Vietnam, Laos, and Cambodia. The Private Sponsorship Program is introduced, which becomes a defining feature of Canada’s refugee response.',
      imagePosition: 'right'
    },
    {
      id: 'event-1989',
      year: 'January 1, 1989',
      title: 'Immigration and Refugee Board of Canada',
      description: 'Immigration and Refugee Board was created to modernize the refugee determination process in Canada.',
      imagePosition: 'left'
    },
    {
      id: 'event-2002',
      year: 'June 28, 2002',
      title: 'Immigration and Refugee Protection Act',
      description: 'New immigration act replacing the 1976 one, emphasizing security and enforcement while maintaining the commitment to refugee protection.',
      imagePosition: 'right'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Timeline</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Key historical events related to Vietnamese migration and refugee experiences in Canada.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Vietnamese Migration to Canada Timeline</h2>
          
          <Timeline events={timelineEvents} />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Learn More About These Historical Events</h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Dive deeper into the stories behind these pivotal moments in Vietnamese migration history.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/stories" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Read Personal Stories
            </Link>
            <Link to="/bibliography" className="px-6 py-3 bg-white text-indigo-800 font-medium rounded-lg hover:bg-indigo-50 transition">
              View Bibliography
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;