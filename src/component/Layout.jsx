import React from 'react'
import Sidebar from '../pages/sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Sidebar />
      </header>
      <main className="flex-grow mt-20">
        <Outlet />
      </main>
      {/* <footer className="w-full">
      <Footer />
    </footer> */}
    </div>
  )
}

export default Layout