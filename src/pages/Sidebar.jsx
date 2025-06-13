import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, time, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const controls = useAnimation()

  const menuItems = [
    { title: "Home", path: '/' },
    { title: "Contact", path: '/contact' },
    { title: "Pricing", path: "/pricing" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "cart(0)", path: "/cart" }
  ]



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (title) => {
    setClickedItem(title)
    setTimeout(() => {
      setClickedItem(null)
    }, 1000)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // mobile
        controls.start({
          scale: 0.8,
          transition: { duration: 0.3 }
        })
      } else { // desktop
        controls.start({
          scale: 1,
          transition: { duration: 0.3 }
        })
      }
    }

    // Initial check
    handleResize()

    // Add resize listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [controls])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className='flxed w-full fixed'
      animate={{
        height: isScrolled ? "60px" : "80px",
        transition: { duration: 0.3 }
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="flex items-center justify-between h-34">
          {/* logo */}
          <Link to='/'>
            <motion.img
              src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66fd60d10380a91e93dfc58c_logo-nav.svg"
              loading="lazy"
              alt="logo"

              style={{
                width: '200px', // Default size
                height: 'auto',
                '@media (min-width: 768px)': {
                  width: '250px', // Medium screens
                },
                '@media (min-width: 1024px)': {
                  width: '300px', // Large screens
                }
              }}
            />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {
                menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}

                      onClick={() => handleClick(item.title)}

                      className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-x font-medium hover:font-bold transition-colors duration-300'
                    >
                      {item.title}

                    </Link>

                  </motion.div>
                ))
              }
            </div>
          </div>
          <motion.button
            className='font-bold text-white px-4 py-3 rounded-full bg-blue-800 hidden md:block'
          >
            Get Started
          </motion.button>

        </div>
      </div>

      {/* mobile icons  */}
      <div className="md:hidden flex items-center justify-between container h-20">
        <Link to='/'>
          <motion.img
            src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66fd60d10380a91e93dfc58c_logo-nav.svg"
            loading="lazy"
            alt="logo"
            animate={controls}
            className='font-bold'

          />
        </Link>

        <div className="flex items-center justify-between gap-8">
          <div className="text-sm hover:font-bold transition-all duration-300">
            Cart<span>(0)</span>
          </div>
          <motion.div
            className="mobile-menu-icon w-8 h-8 relative cursor-pointer mr-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {/* First line */}
            <motion.div
              className="absolute w-full h-0.5 bg-gray-600 top-1/2"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -8,
                backgroundColor: isOpen ? "#EF4444" : "#4B5563",
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Second line */}
            <motion.div
              className="absolute w-full h-0.5 bg-gray-600 top-1/2"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 8,
                backgroundColor: isOpen ? "#EF4444" : "#4B5563",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col items-center p-6">
              <div className="flex justify-end w-full mb-8">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Saasly Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <img
                  src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66fd60d10380a91e93dfc58c_logo-nav.svg"
                  alt="Saasly Logo"
                  className="w-48"
                />
              </motion.div>

              <div className="flex flex-col items-center space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false)
                        handleClick(item.title)
                      }}
                      className="text-gray-600 hover:text-gray-900 text-6xl font-medium"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                  className="mt-8 font-bold text-white px-8 py-4 rounded-full bg-blue-800 text-2xl"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Sidebar