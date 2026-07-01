import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to WomenWork</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Remote Job Board & Skill-Up Platform for Homemakers
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Browse Jobs
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition border border-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose WomenWork?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flexible Remote Jobs',
                description: 'Find jobs that fit your schedule and work from anywhere',
                icon: '💼',
              },
              {
                title: 'Skill Development',
                description: 'Learn new skills with our comprehensive courses',
                icon: '📚',
              },
              {
                title: 'Community Support',
                description: 'Connect with other professionals and mentors',
                icon: '👥',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of homemakers who have found rewarding remote work opportunities
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
          >
            Sign Up Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
