import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import jobsService from '@/services/jobsService'
import { Job } from '@/types'
import Footer from '@/components/Footer'
import { useAppSelector } from '@/hooks/useAppRedux'

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true)
        const data = await jobsService.getJobById(id!)
        setJob(data)
      } catch (error) {
        console.error('Error fetching job:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchJob()
  }, [id])

  const handleApply = async () => {
    if (!isAuthenticated) {
      navigate('/signin')
      return
    }

    try {
      setApplying(true)
      await jobsService.applyForJob(id!)
      alert('Application submitted successfully!')
    } catch (error) {
      alert('Error submitting application')
    } finally {
      setApplying(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div>
          <p className="text-lg font-medium text-slate-600">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="premium-card max-w-md p-8 text-center">
          <div className="mb-4 text-5xl">📄</div>
          <h2 className="text-2xl font-black text-slate-900">Job not found</h2>
          <Link to="/jobs" className="premium-button mt-6 inline-flex rounded-xl px-5 py-3 text-sm">
            Back to jobs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Link to="/jobs" className="mb-6 inline-flex items-center text-sm font-semibold text-violet-700 transition hover:text-violet-800">
          ← Back to jobs
        </Link>

        <div className="premium-card overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 via-indigo-500 to-pink-500 px-6 py-10 text-white md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-violet-100">
                  {job.jobType}
                </span>
                <h1 className="mt-5 text-3xl font-black md:text-5xl">{job.title}</h1>
                <p className="mt-3 text-lg text-violet-100">{job.company}</p>
              </div>

              <button
                onClick={handleApply}
                disabled={applying}
                className="premium-button rounded-xl bg-white px-6 py-3 text-base font-bold text-violet-700 shadow-none hover:shadow-none"
              >
                {applying ? 'Applying...' : 'Apply now'}
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid gap-5 border-b border-slate-200 pb-8 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Location</div>
                <div className="mt-2 text-xl font-bold text-slate-900">{job.location}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Salary</div>
                <div className="mt-2 text-xl font-bold text-slate-900">{job.salary || 'Competitive'}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Posted</div>
                <div className="mt-2 text-xl font-bold text-slate-900">{new Date(job.postedDate).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-black text-slate-900">About this role</h2>
                  <p className="text-base leading-8 text-slate-600 whitespace-pre-wrap">{job.description}</p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-black text-slate-900">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements?.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-slate-600">
                        <span className="mt-1 text-lg text-violet-600">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-900">Quick apply</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Interested in this opportunity? Apply now and take the next step toward a flexible, career-friendly role.
                </p>
                <button
                  onClick={handleApply}
                  disabled={applying}
                  className="premium-button mt-6 w-full rounded-xl px-4 py-3 text-sm"
                >
                  {applying ? 'Applying...' : 'Apply for this job'}
                </button>
                <div className="mt-5 rounded-2xl bg-white p-4 text-sm text-slate-600">
                  <div className="font-bold text-slate-900">Support</div>
                  <div className="mt-2">Remote-friendly, flexible schedule, and skill-building support.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default JobDetail
