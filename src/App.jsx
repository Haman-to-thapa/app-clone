import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'


const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App