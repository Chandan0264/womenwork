import apiClient from './api'
import { Job, PaginatedResponse } from '@/types'

const jobsService = {
  getAllJobs: async (page = 1, limit = 10, filters?: Record<string, any>): Promise<PaginatedResponse<Job>> => {
    const response = await apiClient.get('/jobs', {
      params: { page, limit, ...filters },
    })
    return response.data
  },

  getJobById: async (id: string): Promise<Job> => {
    const response = await apiClient.get(`/jobs/${id}`)
    return response.data
  },

  searchJobs: async (query: string, page = 1, limit = 10): Promise<PaginatedResponse<Job>> => {
    const response = await apiClient.get('/jobs/search', {
      params: { q: query, page, limit },
    })
    return response.data
  },

  applyForJob: async (jobId: string): Promise<any> => {
    const response = await apiClient.post(`/jobs/${jobId}/apply`)
    return response.data
  },

  getMyApplications: async (page = 1, limit = 10): Promise<PaginatedResponse<any>> => {
    const response = await apiClient.get('/applications', {
      params: { page, limit },
    })
    return response.data
  },

  getFeaturedJobs: async (): Promise<Job[]> => {
    const response = await apiClient.get('/jobs/featured')
    return response.data
  },
}

export default jobsService
