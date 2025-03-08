import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CVRepository = () => {
  const cvTemplates = [
    {
      title: 'Software Engineer CV',
      tags: ['Tech', 'Full-time'],
      preview: '/src/assets/images/cv-preview-1.png',
      downloads: 2345
    },
    {
      title: 'Product Manager CV',
      tags: ['Product', 'Full-time'],
      preview: '/src/assets/images/cv-preview-2.png',
      downloads: 1890
    },
    {
      title: 'Data Scientist CV',
      tags: ['Tech', 'Analytics'],
      preview: '/src/assets/images/cv-preview-3.png',
      downloads: 1567
    },
    {
      title: 'Research Intern CV',
      tags: ['Research', 'Internship'],
      preview: '/src/assets/images/cv-preview-4.png',
      downloads: 1234
    },
    {
      title: 'Business Analyst CV',
      tags: ['Business', 'Full-time'],
      preview: '/src/assets/images/cv-preview-5.png',
      downloads: 2123
    },
    {
      title: 'UI/UX Designer CV',
      tags: ['Design', 'Creative'],
      preview: '/src/assets/images/cv-preview-6.png',
      downloads: 1678
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              CV Templates
            </h1>
            <p className="text-xl text-gray-600">
              Professional CV templates approved by industry experts
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search CVs..."
              className="flex-1 min-w-[200px] px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">All Categories</option>
              <option value="tech">Tech</option>
              <option value="business">Business</option>
              <option value="research">Research</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="latest">Latest</option>
              <option value="popular">Most Downloaded</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvTemplates.map((cv, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 group hover:border-purple-200 transition-all hover:shadow-lg"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src={cv.preview}
                    alt={cv.title}
                    className="w-full h-full object-cover filter blur-sm group-hover:blur-0 transition-all"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      Preview CV
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{cv.title}</h3>
                  <div className="flex gap-2 mb-4">
                    {cv.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{cv.downloads} downloads</span>
                    <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                      Download →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CVRepository; 