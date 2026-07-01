export interface User {
  id: string
  name: string
  email: string
  profile?: Profile
  createdAt: Date
}

export interface Profile {
  id: string
  userId: string
  avatar?: string
  bio?: string
  skills: string[]
  experience?: string
  location?: string
  phone?: string
  linkedin?: string
  portfolio?: string
}

export interface Job {
  id: string
  title: string
  company: string
  description: string
  requirements: string[]
  salary?: string
  location: string
  jobType: 'full-time' | 'part-time' | 'contract' | 'freelance'
  postedDate: Date
  deadline?: Date
  applications?: number
  featured?: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  rating?: number
  totalEnrolled?: number
  price?: number
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  image?: string
}

export interface Application {
  id: string
  userId: string
  jobId: string
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
  appliedDate: Date
  job?: Job
}

export interface AuthResponse {
  token: string
  user: User
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}
