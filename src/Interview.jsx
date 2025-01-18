import React from 'react'
    import { FaHandshake, FaVideo, FaAmazon, FaUserCheck } from 'react-icons/fa'

    export default function Interview() {
      const resources = [
        {
          icon: <FaHandshake className="w-8 h-8" />,
          title: "Prepare your STAR stories",
          url: "https://www.themuse.com/advice/star-interview-method"
        },
        {
          icon: <FaVideo className="w-8 h-8" />,
          title: "Logistics Overview Video",
          url: "https://youtu.be/7t3k9fSNWeI"
        },
        {
          icon: <FaAmazon className="w-8 h-8" />,
          title: "Interviewing At Amazon",
          url: "https://www.amazon.jobs/content/en/how-we-hire/interviewing-at-amazon"
        },
        {
          icon: <FaUserCheck className="w-8 h-8" />,
          title: "Behavioral-based Interviewing",
          url: "https://www.youtube.com/watch?v=2uM7gYuOvr4&pp=ygUjYmVoYXZpb3JhbCBiYXNlZCBpbnRlcnZpZXcgdHJhaW5pbmc%3D"
        },
        {
          icon: <FaVideo className="w-8 h-8" />,
          title: "Interview Preparation Guide",
          url: "https://youtu.be/CpcxVE5JIX4"
        }
      ]

      return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Interview Preparation</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              >
                <div className="text-primary mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {resource.title}
                </h3>
              </a>
            ))}
          </div>
        </main>
      )
    }
