import React from 'react'
import { useAppSelector } from '@/hooks/useAppRedux'
import Footer from '@/components/Footer'

const Profile: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <span className="section-tag">My profile</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Profile Settings</h1>
          </div>

          <div className="premium-card p-6 md:p-8">
            <div className="mb-8 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-3xl font-black text-white shadow-lg shadow-violet-200">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="mt-5 md:ml-6 md:mt-0">
                <h2 className="text-2xl font-black text-slate-900">{user?.name || 'User Profile'}</h2>
                <p className="mt-1 text-slate-500">{user?.email || 'No email available'}</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
                <input type="text" value={user?.name || ''} disabled className="input-shell bg-slate-50" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input type="email" value={user?.email || ''} disabled className="input-shell bg-slate-50" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Bio</label>
              <textarea
                rows={4}
                placeholder="Tell us about yourself"
                className="input-shell resize-none"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Skills</label>
              <div className="mb-4 flex flex-wrap gap-2">
                {['Writing', 'Design', 'Marketing', 'Virtual Assistance'].map((skill, index) => (
                  <span key={index} className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
                    {skill}
                  </span>
                ))}
              </div>
              <input type="text" placeholder="Add a skill" className="input-shell" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="premium-button rounded-xl px-6 py-3 text-sm">Save changes</button>
              <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
