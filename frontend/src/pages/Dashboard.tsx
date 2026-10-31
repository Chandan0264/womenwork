import React from 'react'
import { useAppSelector } from '@/hooks/useAppRedux'
import Footer from '@/components/Footer'

const Dashboard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth)

  const stats = [
    { title: 'Active applications', value: '5', icon: '📝', tone: 'from-violet-500 to-indigo-500' },
    { title: 'Completed courses', value: '3', icon: '📚', tone: 'from-pink-500 to-rose-400' },
    { title: 'Profile views', value: '28', icon: '👁️', tone: 'from-emerald-500 to-teal-500' },
    { title: 'Messages', value: '12', icon: '💬', tone: 'from-amber-400 to-orange-500' },
  ]

  const recentApplications = [
    { company: 'Tech Corp', position: 'Frontend Developer', status: 'pending' },
    { company: 'Design Studio', position: 'UI Designer', status: 'accepted' },
    { company: 'Marketing Inc', position: 'Content Writer', status: 'pending' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <span className="section-tag">Dashboard</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Welcome back, {user?.name || 'there'}.</h1>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="premium-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                  <p className="mt-3 text-3xl font-black text-slate-900">{stat.value}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.tone} text-2xl shadow-sm`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="premium-card p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-slate-900">Recent applications</h2>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-slate-600">
                View all
              </button>
            </div>

            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={`${app.company}-${app.position}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{app.position}</div>
                      <div className="text-sm text-slate-600">{app.company}</div>
                    </div>
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${
                        app.status === 'accepted'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-6 md:p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-2xl font-black text-white shadow-lg shadow-violet-200">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <h3 className="text-2xl font-black text-slate-900">{user?.name || 'User Profile'}</h3>
              <p className="mt-2 text-sm text-slate-500">{user?.email || 'No email available'}</p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>Availability</span>
                <span className="font-semibold text-slate-900">Remote</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>Experience</span>
                <span className="font-semibold text-slate-900">Beginner</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>Career goal</span>
                <span className="font-semibold text-slate-900">Designer</span>
              </div>
            </div>

            <button className="premium-button mt-6 w-full rounded-xl px-4 py-3 text-sm">
              Edit profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
