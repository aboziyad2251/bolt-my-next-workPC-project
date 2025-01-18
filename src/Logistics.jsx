import React from 'react'
    import { FaTruck, FaBox } from 'react-icons/fa'

    export default function Logistics() {
      const courses = [
        {
          icon: <FaTruck className="w-8 h-8" />,
          title: "Introduction to Supply Chain Management",
          url: "https://www.coursera.org/learn/supply-chain-management"
        },
        {
          icon: <FaBox className="w-8 h-8" />,
          title: "Inventory Management Techniques",
          url: "https://www.coursera.org/learn/inventory-management"
        },
        {
          icon: <FaTruck className="w-8 h-8" />,
          title: "Supply Chain Logistics",
          url: "https://www.coursera.org/learn/supply-chain-logistics/home/module/1"
        }
      ]

      return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Logistics Course</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <a
                key={index}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              >
                <div className="text-primary mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {course.title}
                </h3>
              </a>
            ))}
          </div>
        </main>
      )
    }
