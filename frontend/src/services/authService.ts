import apiClient from './api'
import { User, AuthResponse } from '@/types'

const authService = {
  signup: async (email: string, password: string, name: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/signup', { email, password, name })
    return response.data
  },

  signin: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/signin', { email, password })
    return response.data
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout')
  },

  getProfile: async (): Promise<User> => {
    const response = await apiClient.get('/auth/profile')
    return response.data
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await apiClient.put('/auth/profile', data)
    return response.data
  },

  verifyEmail: async (token: string): Promise<void> => {
    await apiClient.post(`/auth/verify-email/${token}`)
  },

  forgotPassword: async (email: string): Promise<void> => {
    await apiClient.post('/auth/forgot-password', { email })
  },

  resetPassword: async (token: string, password: string): Promise<void> => {
    await apiClient.post(`/auth/reset-password/${token}`, { password })
  },
}

export default authService
