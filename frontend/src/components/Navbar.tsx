import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux'
import { logout } from '@/store/authSlice'

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Jobs', to: '/jobs' },
    { label: 'Courses', to: '/courses' },
    { label: 'Dashboard', to: '/dashboard' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-pink-500 text-xl font-bold text-white shadow-lg shadow-violet-200">
              W
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-slate-900">WomenWork</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Flexible careers</div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-bold text-white">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                  <span className="font-medium">Hi, {user?.name || 'User'}</span>
                </div>
                <Link to="/profile" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:text-violet-600">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:text-violet-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="premium-button rounded-full px-5 py-2 text-sm"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-600"
              >
                {item.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Sign In
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
