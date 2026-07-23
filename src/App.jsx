import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Startups from './sections/Startups'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const FloatingBackButton = () => {
  const location = useLocation()
  if (location.pathname === '/') return null

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-6 left-6 md:top-8 md:left-8 z-50"
    >
      <Link 
        to="/"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] text-white backdrop-blur-xl border border-white/[0.1] shadow-lg shadow-black/20 hover:bg-white/[0.15] hover:scale-105 transition-all font-medium text-sm"
      >
        <FiArrowLeft size={16} />
        Home
      </Link>
    </motion.div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Floating Back Button (hidden on home) */}
        <FloatingBackButton />
        
        {/* Main Content */}
        <main className="relative z-10 pt-16 md:pt-24 min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
