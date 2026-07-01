import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks/useAppRedux'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
