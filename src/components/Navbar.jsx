import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4
        transition-all duration-500
        ${isScrolled 
          ? 'bg-dark-900/60 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <motion.div 
              className={`
                w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500
                flex items-center justify-center font-bold text-white text-lg
                shadow-lg shadow-cyan-500/30
              `}
              whileHover={{ scale: 1.05 }}
            >
              O
            </motion.div>
            <motion.span 
              className="font-display font-semibold text-lg text-white"
              whileHover={{ scale: 1.05 }}
            >
              OPAKI
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
