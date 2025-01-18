import React from 'react'
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
    import Home from './Home'
    import Principles from './Principles'
    import Logistics from './Logistics'
    import Interview from './Interview'

    export default function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <nav className="bg-white shadow-lg">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-6">
                  <div className="text-2xl font-bold text-primary">My Improvement</div>
                  <div className="flex space-x-8">
                    <Link to="/" className="hover:text-secondary">Home</Link>
                  </div>
                </div>
              </div>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/principles" element={<Principles />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/interview" element={<Interview />} />
            </Routes>
          </div>
        </Router>
      )
    }
