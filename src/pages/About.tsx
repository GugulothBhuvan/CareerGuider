import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const stats = [
    { label: 'Students Helped', value: '10,000+' },
    { label: 'CV Templates', value: '50+' },
    { label: 'Career Paths', value: '25+' },
    { label: 'Success Rate', value: '95%' }
  ];

  const values = [
    {
      title: 'Student-Centric',
      description: 'We put students first in everything we do, ensuring our guidance meets their unique needs.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Industry Aligned',
      description: 'Our resources and guidance are aligned with current industry standards and requirements.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Continuous Support',
      description: 'We provide ongoing support and updates to help students throughout their career journey.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              About CDC Career Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              We're dedicated to helping students navigate their career paths with confidence,
              providing the tools and guidance they need to succeed in their professional journey.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-medium text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl p-12 shadow-sm text-center">
            <h2 className="text-3xl font-medium mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 