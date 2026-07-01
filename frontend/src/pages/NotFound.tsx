import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
          <p className="text-gray-500 mb-8 max-w-md">Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
