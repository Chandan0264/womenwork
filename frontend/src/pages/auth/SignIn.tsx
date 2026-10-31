import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authService from '@/services/authService'
import { useAppDispatch } from '@/hooks/useAppRedux'
import { setUser, setToken } from '@/store/authSlice'
import Footer from '@/components/Footer'

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    try {
      setLoading(true)
      setError('')
      const response = await authService.signin(data.email, data.password)
      dispatch(setToken(response.token))
      dispatch(setUser(response.user))
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(91,73,214,0.10),_transparent_30%),linear-gradient(180deg,_#f7f7ff_0%,_#eef4ff_100%)] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="premium-card p-7 md:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-pink-500 text-xl font-black text-white shadow-lg shadow-violet-200">
              W
            </div>
            <h1 className="text-3xl font-black text-slate-900">Welcome back</h1>
            <p className="mt-2 text-slate-600">Sign in to continue your journey</p>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="input-shell"
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-2 text-sm text-rose-600">{errors.email.message as string}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="input-shell"
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-2 text-sm text-rose-600">{errors.password.message as string}</p>}
            </div>

            <button type="submit" disabled={loading} className="premium-button w-full rounded-xl px-4 py-3 text-base">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="font-bold text-violet-700 hover:text-violet-800">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
