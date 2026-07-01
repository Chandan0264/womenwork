import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Job } from '@/types'

interface JobsState {
  jobs: Job[]
  totalJobs: number
  isLoading: boolean
  error: string | null
  selectedJob: Job | null
  filters: {
    jobType: string
    location: string
    salary: string
    searchQuery: string
  }
}

const initialState: JobsState = {
  jobs: [],
  totalJobs: 0,
  isLoading: false,
  error: null,
  selectedJob: null,
  filters: {
    jobType: '',
    location: '',
    salary: '',
    searchQuery: '',
  },
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload
    },
    setTotalJobs: (state, action: PayloadAction<number>) => {
      state.totalJobs = action.payload
    },
    setSelectedJob: (state, action: PayloadAction<Job | null>) => {
      state.selectedJob = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setFilters: (state, action: PayloadAction<Partial<JobsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = initialState.filters
    },
  },
})

export const { setJobs, setTotalJobs, setSelectedJob, setLoading, setError, setFilters, clearFilters } = jobsSlice.actions
export default jobsSlice.reducer
