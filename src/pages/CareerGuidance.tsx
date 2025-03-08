import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareerGuidance = () => {
  const careers = [
    {
      title: "Software Development",
      stages: ["Fundamentals", "Web Development", "Backend Systems", "DevOps", "System Design"],
      duration: "12-18 months"
    },
    {
      title: "Data Science",
      stages: ["Mathematics & Statistics", "Programming", "Machine Learning", "Deep Learning", "MLOps"],
      duration: "15-20 months"
    },
    {
      title: "Product Management",
      stages: ["Product Strategy", "User Research", "Agile Methods", "Product Analytics", "Leadership"],
      duration: "12-15 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              Career Roadmaps
            </h1>
            <p className="text-xl text-gray-600">
              Detailed guidance for your professional journey
            </p>
          </div>

          <div className="grid gap-8">
            {careers.map((career, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-medium text-gray-900 mb-2">{career.title}</h2>
                    <p className="text-gray-600">Estimated Duration: {career.duration}</p>
                  </div>
                  <button className="mt-4 lg:mt-0 inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    View Roadmap
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-6">
                    {career.stages.map((stage, stageIndex) => (
                      <div key={stageIndex} className="relative flex items-center">
                        <div className="absolute left-5 w-3 h-3 rounded-full bg-purple-600"></div>
                        <div className="ml-12">
                          <h3 className="text-lg font-medium text-gray-900">Stage {stageIndex + 1}</h3>
                          <p className="text-gray-600">{stage}</p>
                        </div>
                      </div>
                    ))}
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

export default CareerGuidance; 