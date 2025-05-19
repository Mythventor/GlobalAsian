import React, { useState, useEffect } from 'react';

const TimelineEvent = ({ event, isVisible }) => {
  return (
    <div 
      id={event.id}
      className={`timeline-event relative transition-all duration-700 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {event.imagePosition === 'right' ? (
          <>
            <div className="md:text-right md:pr-12">
              <div className="text-2xl font-bold text-indigo-600">{event.year}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-stone-600">
                {event.description}
              </p>
            </div>
            <div className="md:pl-12">
              {/* <div className="bg-[url('/api/placeholder/400/300')] h-48 bg-cover bg-center rounded-lg shadow-sm transform transition-transform duration-500 hover:scale-105"></div> */}
            </div>
          </>
        ) : (
          <>
            <div className="md:order-last md:text-left md:pl-12">
              <div className="text-2xl font-bold text-indigo-600">{event.year}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-stone-600">
                {event.description}
              </p>
            </div>
            <div className="md:order-first md:text-right md:pr-12">
              {/* <div className="bg-[url('/api/placeholder/400/300')] h-48 bg-cover bg-center rounded-lg shadow-sm transform transition-transform duration-500 hover:scale-105"></div> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ events }) => {
  const [visibleItems, setVisibleItems] = useState({});
  
  useEffect(() => {
    // Set up intersection observer to detect when timeline items are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.2 });
    
    // Observe all timeline event elements
    document.querySelectorAll('.timeline-event').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
      
      {/* Timeline Events */}
      <div className="space-y-24">
        {events.map((event) => (
          <TimelineEvent 
            key={event.id} 
            event={event} 
            isVisible={visibleItems[event.id]} 
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;