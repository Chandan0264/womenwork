import React from 'react'
import { useAppSelector } from '@/hooks/useAppRedux'
import Footer from '@/components/Footer'

const Dashboard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { title: 'Active Applications', value: '5', icon: '📝' },
            { title: 'Completed Courses', value: '3', icon: '📚' },
            { title: 'Profile Views', value: '28', icon: '👁️' },
            { title: 'Messages', value: '12', icon: '💬' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <span className="text-4xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Recent Applications</h2>
            <div className="space-y-4">
              {[
                { company: 'Tech Corp', position: 'Frontend Developer', status: 'pending' },
                { company: 'Design Studio', position: 'UI Designer', status: 'accepted' },
                { company: 'Marketing Inc', position: 'Content Writer', status: 'pending' },
              ].map((app, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold text-gray-900">{app.position}</p>
                  <p className="text-gray-600 text-sm">{app.company}</p>
                  <p className={`text-xs font-semibold mt-1 ${
                    app.status === 'accepted' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {app.status.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Profile</h2>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
              <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
              <p className="text-gray-600 text-sm">{user?.email}</p>
              <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
