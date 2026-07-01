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

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (!job) return <div className="min-h-screen flex items-center justify-center">Job not found</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/jobs" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">← Back to Jobs</Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600">{job.company}</p>
            </div>
            <button
              onClick={handleApply}
              disabled={applying}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {applying ? 'Applying...' : 'Apply Now'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Job Type</h3>
              <p className="text-lg font-semibold">{job.jobType}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Location</h3>
              <p className="text-lg font-semibold">{job.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Salary</h3>
              <p className="text-lg font-semibold">{job.salary || 'Competitive'}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Job</h2>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{job.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements?.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Interested in this position? Apply now and let's get you started on your remote work journey!
            </p>
            <button
              onClick={handleApply}
              disabled={applying}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {applying ? 'Applying...' : 'Apply for This Job'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default JobDetail
