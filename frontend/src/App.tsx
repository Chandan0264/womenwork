import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

// Pages
import Home from '@/pages/Home'
import Jobs from '@/pages/Jobs'
import JobDetail from '@/pages/JobDetail'
import Courses from '@/pages/Courses'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import SignUp from '@/pages/auth/SignUp'
import SignIn from '@/pages/auth/SignIn'
import NotFound from '@/pages/NotFound'

import '@/styles/globals.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout><Navbar /></Layout>}>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/courses" element={<Courses />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Protected Routes */}
          <Route element={<Layout><Navbar /></Layout>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
