import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import jobsService from '@/services/jobsService'
import { Job } from '@/types'
import Footer from '@/components/Footer'

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    searchQuery: '',
  })

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const response = await jobsService.getAllJobs(1, 20, filters)
        setJobs(response.data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [filters])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-tag">Remote opportunities</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Explore jobs that fit your lifestyle.</h1>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
            {jobs.length} opportunities available
          </div>
        </div>

        <div className="premium-card mb-10 p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Search</label>
              <input
                type="text"
                placeholder="Search jobs, skills, or companies"
                value={filters.searchQuery}
                onChange={handleSearch}
                className="input-shell"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Job Type</label>
              <select
                value={filters.jobType}
                onChange={(e) => handleFilterChange('jobType', e.target.value)}
                className="input-shell"
              >
                <option value="">All types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Location</label>
              <input
                type="text"
                placeholder="e.g. Remote"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="input-shell"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={() => setFilters({ jobType: '', location: '', searchQuery: '' })}
              className="rounded-full border border-slate-200 bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Clear filters
            </button>
          </div>
        </div>

        {loading ? (
          <div className="premium-card flex min-h-[260px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div>
              <p className="text-lg font-medium text-slate-600">Loading opportunities...</p>
            </div>
          </div>
        ) : jobs.length === 0 ? (
          <div className="premium-card flex min-h-[220px] items-center justify-center px-6 text-center">
            <div>
              <div className="mb-4 text-5xl">🔎</div>
              <h3 className="text-2xl font-bold text-slate-900">No jobs match your filters</h3>
              <p className="mt-2 text-slate-600">Try adjusting your search or clear the filters to see more roles.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {jobs.map((job) => (
              <div key={job.id} className="premium-card overflow-hidden p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                <Link to={`/jobs/${job.id}`} className="block">
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-violet-700">
                          {job.jobType}
                        </span>
                        <span className="text-sm text-slate-500">Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-violet-600">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-600">{job.company}</p>
                      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{job.description}</p>
                    </div>

                    <div className="min-w-[220px] rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Salary</div>
                      <div className="text-2xl font-black text-slate-900">{job.salary || 'Competitive'}</div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                        <span>📍</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Jobs
