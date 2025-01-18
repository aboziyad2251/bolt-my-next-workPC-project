import React from 'react'
    import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa'
    import { Link } from 'react-router-dom'

    export default function Home() {
      return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Modern Experiences for Operation Supervisor - with Logistics
            </h1>
            <div className="flex justify-center">
              <Link to="/principles" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition duration-300">
                Get Started
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/principles" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <FaRocket className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Principles and Leadership in Amazon</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency, delivering lightning-fast experiences
              </p>
            </Link>
            <Link to="/logistics" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <FaLightbulb className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Logistics Course</h3>
              <p className="text-gray-600">
                Cutting-edge technologies for modern web development challenges
              </p>
            </Link>
            <Link to="/interview" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <FaUsers className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Interview Prep</h3>
              <p className="text-gray-600">
                Intuitive interfaces crafted with user experience in mind
              </p>
            </Link>
          </div>
        </main>
      )
    }
