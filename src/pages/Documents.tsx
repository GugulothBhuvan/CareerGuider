import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Documents = () => {
  const documents = [
    {
      title: 'Resume Writing Guide',
      description: 'Learn how to craft a compelling resume that stands out.',
      type: 'PDF',
      size: '2.4 MB',
      category: 'Guide'
    },
    {
      title: 'Cover Letter Template',
      description: 'Professional cover letter templates with writing tips.',
      type: 'DOCX',
      size: '1.8 MB',
      category: 'Template'
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive guide for technical and HR interviews.',
      type: 'PDF',
      size: '3.1 MB',
      category: 'Guide'
    },
    {
      title: 'Career Development Plan',
      description: 'Template for planning your career growth and milestones.',
      type: 'PDF',
      size: '1.5 MB',
      category: 'Template'
    },
    {
      title: 'Networking Guide',
      description: 'Tips and strategies for professional networking.',
      type: 'PDF',
      size: '2.1 MB',
      category: 'Guide'
    },
    {
      title: 'Job Application Checklist',
      description: 'A comprehensive checklist for job applications.',
      type: 'PDF',
      size: '1.2 MB',
      category: 'Checklist'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              Career Resources
            </h1>
            <p className="text-xl text-gray-600">
              Essential documents and guides for your professional journey
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search documents..."
              className="flex-1 min-w-[200px] px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">All Categories</option>
              <option value="guide">Guides</option>
              <option value="template">Templates</option>
              <option value="checklist">Checklists</option>
            </select>
          </div>

          <div className="grid gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-200 hover:border-purple-200 transition-all hover:shadow-sm"
              >
                <div className="flex items-start md:items-center gap-6 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">{doc.type}</span>
                    <p className="text-sm text-gray-500">{doc.size}</p>
                  </div>
                  <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </button>
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

export default Documents; 