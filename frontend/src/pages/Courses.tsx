import React from 'react'
import Footer from '@/components/Footer'

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Basics',
      instructor: 'Sarah Johnson',
      level: 'beginner',
      duration: '4 weeks',
      rating: 4.8,
      enrolled: 1250,
    },
    {
      id: 2,
      title: 'Web Development with React',
      instructor: 'John Smith',
      level: 'intermediate',
      duration: '8 weeks',
      rating: 4.9,
      enrolled: 980,
    },
    {
      id: 3,
      title: 'Virtual Assistant Skills',
      instructor: 'Emma Wilson',
      level: 'beginner',
      duration: '3 weeks',
      rating: 4.7,
      enrolled: 2100,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Skill Development Courses</h1>
          <p className="text-gray-600 text-lg">Learn new skills and advance your career</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">By {course.instructor}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold capitalize">{course.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold">⭐ {course.rating}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Enrolled:</span>
                    <span className="font-semibold">{course.enrolled.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
