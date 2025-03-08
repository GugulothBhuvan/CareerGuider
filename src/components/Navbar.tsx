import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-gray-900">
              CareerGuide
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/career-guidance" className="text-gray-600 hover:text-gray-900 transition-colors">
              Career Guidance
            </a>
            <a href="/cv-repository" className="text-gray-600 hover:text-gray-900 transition-colors">
              CV Repository
            </a>
            <a href="/documents" className="text-gray-600 hover:text-gray-900 transition-colors">
              Documents
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="/career-guidance"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Career Guidance
          </a>
          <a
            href="/cv-repository"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            CV Repository
          </a>
          <a
            href="/documents"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Documents
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;