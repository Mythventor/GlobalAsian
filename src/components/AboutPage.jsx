import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Dedicated to preserving and sharing the history, stories....etc....
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-stone-600 mb-4">
                Our mission is to document, preserve, and share the stories of Vietnamese boat people who sought refuge in Australia and other countries following the Vietnam War.
              </p>
              <p className="text-lg text-stone-600 mb-4">
                Through ...... etc .... we aim to ensure that this significant chapter in history is remembered and understood by current and future generations.
              </p>
              <p className="text-lg text-stone-600">
                We believe that these stories of courage, resilience, and hope are not only an important part of Vietnamese-Australian history ....etc....
              </p>
            </div>
            <div className="bg-[url('/api/placeholder/600/400')] h-80 bg-cover bg-center rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mengpang Xing", role: "Team 11", bio: "Computer Science & Data Science @ Northwestern University" },
              { name: "Ethan Lam", role: "Team 11", bio: "Computer Science @ Northwestern University" },
              { name: "Teresa Ayala Leon", role: "Team 11", bio: "Journalism @ Northwestern University " }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-32 h-32 mx-auto mb-4 bg-indigo-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[url('/api/placeholder/150/150')] bg-cover bg-center"></div>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-indigo-600 text-center mb-4">{member.role}</p>
                <p className="text-stone-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;