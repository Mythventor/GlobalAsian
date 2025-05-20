import React from 'react';
import AboutUsImage from "/src/assets/Aboutus1.jpg";
const AboutPage = () => {
  return (
    <div>
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Dedicated to preserving and sharing the history, stories, and cultural legacy of Vietnamese refugees who sought new beginnings in Canada after the Vietnam War.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-stone-600 mb-4">
                Our mission is to document, preserve, and share the stories of Vietnamese boat people who sought refuge in Canada following the Vietnam War. We aim to honor their courage, resilience, and contributions to Canadian society.
              </p>
              <p className="text-lg text-stone-600 mb-4">
                Through oral histories, archival research, and community engagement, we aim to ensure that this significant chapter in history is remembered and understood by current and future generations. We believe in creating an accessible digital archive that connects Vietnamese-Canadians with their heritage and educates the broader public about this important part of Canadian history.
              </p>
              <p className="text-lg text-stone-600">
                We believe that these stories of courage, resilience, and hope are not only an important part of Vietnamese-Canadian history but also reflect universal themes of human determination and the search for freedom and opportunity. By sharing these narratives, we hope to foster greater understanding, empathy, and appreciation for the refugee experience and the cultural richness they bring to their new home.
              </p>
            </div>
            <div className="h-80 rounded-lg shadow-lg">
              <img src={AboutUsImage} alt="Vietnamese refugees in Canada" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-stone-600 mb-4 text-center">
              We envision a future where the Vietnamese refugee experience is recognized as a vital part of Canadian history and where the stories of Vietnamese boat people are preserved for generations to come.
            </p>
            <p className="text-lg text-stone-600 text-center">
              Through education, community engagement, and digital preservation, we strive to create a lasting legacy that honors the journeys of those who risked everything for freedom and found new beginnings in Canada.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mengpang Xing", role: "Team 11", bio: "Computer Science & Data Science @ Northwestern University. Passionate about using technology to preserve cultural heritage and make historical archives more accessible." },
              { name: "Ethan Lam", role: "Team 11", bio: "Computer Science @ Northwestern University, Weinberg Psychology transfer Fall 2025. Interested in the intersection of psychology and refugee experiences, with a focus on community resilience." },
              { name: "Teresa Ayala Leon", role: "Team 11", bio: "Journalism @ Northwestern University. Dedicated to amplifying underrepresented voices and telling important stories that shape our understanding of history and culture." }
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

      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
            We welcome contributions from researchers, historians, community members, and anyone interested in preserving the stories of Vietnamese boat people in Canada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
              Share Your Story
            </button>
            <button className="px-6 py-3 bg-white text-indigo-800 font-medium rounded-lg hover:bg-indigo-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;