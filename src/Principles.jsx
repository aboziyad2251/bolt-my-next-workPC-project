import React from 'react'
    import { FaUser, FaHandshake, FaLightbulb, FaCheck, FaBook, FaUsers, FaStar, FaRocket, FaRunning, FaPiggyBank, FaHandHoldingHeart, FaSearch, FaComments, FaTrophy, FaGlobe, FaBalanceScale } from 'react-icons/fa'

    export default function Principles() {
      const principles = [
        {
          icon: <FaUser className="w-8 h-8" />,
          title: "Customer Obsession",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaHandshake className="w-8 h-8" />,
          title: "Ownership",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaLightbulb className="w-8 h-8" />,
          title: "Invent and Simplify",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaCheck className="w-8 h-8" />,
          title: "Are Right, A Lot",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaBook className="w-8 h-8" />,
          title: "Learn and Be Curious",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          title: "Hire and Develop the Best",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaStar className="w-8 h-8" />,
          title: "Insist on the Highest Standards",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaRocket className="w-8 h-8" />,
          title: "Think Big",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaRunning className="w-8 h-8" />,
          title: "Bias for Action",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaPiggyBank className="w-8 h-8" />,
          title: "Frugality",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaHandHoldingHeart className="w-8 h-8" />,
          title: "Earn Trust",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaSearch className="w-8 h-8" />,
          title: "Dive Deep",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaComments className="w-8 h-8" />,
          title: "Have Backbone; Disagree and Commit",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaTrophy className="w-8 h-8" />,
          title: "Deliver Results",
          url: "https://www.amazon.jobs/en/principles"
        },
        {
          icon: <FaGlobe className="w-8 h-8" />,
          title: "Strive to be Earth's Best Employer",
          url: "https://www.aboutamazon.com/news/workplace/striving-to-be-earths-best-employer"
        },
        {
          icon: <FaBalanceScale className="w-8 h-8" />,
          title: "Success and Scale Bring Broad Responsibility",
          url: "https://www.aboutamazon.com/news/workplace/success-and-scale-bring-broad-responsibility"
        }
      ]

      return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Principles and Leadership in Amazon</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <a
                key={index}
                href={principle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              >
                <div className="text-primary mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {principle.title}
                </h3>
              </a>
            ))}
          </div>
        </main>
      )
    }
