
import Sidebar from '../pages/Sidebar.jsx'
import { Outlet } from 'react-router-dom'


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