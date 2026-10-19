import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiUser, FiCode, FiLayers, FiImage, FiMail, FiBriefcase } from 'react-icons/fi'

const pages = [
  {
    name: 'About Me',
    path: '/about',
    icon: <FiUser className="w-6 h-6 md:w-8 md:h-8" />,
    desc: 'My journey, milestones & leadership',
    color: 'from-blue-500/20 to-blue-600/5',
    accent: 'bg-blue-500'
  },
  {
    name: 'Skills',
    path: '/skills',
    icon: <FiCode className="w-6 h-6 md:w-8 md:h-8" />,
    desc: 'Technologies & tools I use',
    color: 'from-cyan-500/20 to-cyan-600/5',
    accent: 'bg-cyan-500'
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: <FiLayers className="w-6 h-6 md:w-8 md:h-8" />,
    desc: 'Featured work & case studies',
    color: 'from-purple-500/20 to-purple-600/5',
    accent: 'bg-purple-500'
  },
  {
    name: 'Startups & Businesses',
    path: '/startups',
    icon: <FiBriefcase className="w-6 h-6 md:w-8 md:h-8" />,
    desc: 'Experience, ventures & products',
    color: 'from-amber-500/20 to-cyan-600/5',
    accent: 'bg-amber-500'
  },
  {
    name: 'Gallery',
    path: '/gallery',
    icon: <FiImage className="w-6 h-6 md:w-8 md:h-8" />,
    desc: 'Awards, design & moments',
    color: 'from-pink-500/20 to-cyan-600/5',
    accent: 'bg-pink-500'
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <FiMail className="w-6 h-6 md:w-8 md:h-8" />,
    desc: 'Get in touch with me',
    color: 'from-green-500/20 to-green-600/5',
    accent: 'bg-green-500'
  }
]

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen -mt-16 md:-mt-24">
      {/* Hero Section - Full width image with text overlay */}
      <motion.div 
        className="relative w-full h-[70vh] md:h-[92vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Full-screen background image */}
        <img
          src="/profile-hero.jpg"
          alt="Opakrwoth Jonathan" 
          className="absolute inset-0 w-full h-full object-cover object-center md:brightness-110"
        />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
        
        {/* Extra bottom fade to seamlessly blend into background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent" />
        
        {/* Name and Title positioned at bottom */}
        <div className="absolute inset-x-0 bottom-8 md:bottom-0 px-4">
          <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="font-display font-bold text-5xl md:text-5xl lg:text-6xl mb-3 text-white tracking-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">OPAKI</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl text-gray-200 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Developer & Entrepreneur
          </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Navigation Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 py-12 w-full -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full relative z-10">
        {pages.map((page, index) => (
          <motion.div
            key={page.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Link to={page.path} className="block group h-full" style={{ perspective: '1000px' }}>
              <div className={`
                relative h-full p-5 md:p-8 rounded-3xl md:rounded-[2rem] overflow-hidden
                bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-transparent
                border border-white/[0.15]
                shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.2)]
                backdrop-blur-2xl transition-all duration-500 ease-out
                group-hover:border-white/[0.25]
                group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1),inset_0_2px_2px_rgba(255,255,255,0.2),inset_0_-2px_2px_rgba(0,0,0,0.2)]
                group-hover:-translate-y-2
              `}
              style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Crystal glass refraction layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] rounded-3xl md:rounded-[2rem]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent rounded-3xl md:rounded-[2rem]" />
                
                {/* Dynamic colored gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl md:rounded-[2rem]`} />
                
                {/* Top edge highlight - crystal light catch */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
                <div className="absolute top-[1px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Left edge highlight */}
                <div className="absolute top-4 bottom-4 left-0 w-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full" />
                
                {/* Inner glow */}
                <div className="absolute inset-2 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-start gap-3 md:gap-4">
                  <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.08] border border-white/[0.1] text-white
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.2)]
                    group-hover:scale-110 group-hover:bg-white/[0.12] transition-all duration-500 ease-out`}
                  >
                    {page.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-white mb-1 md:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      {page.name}
                    </h2>
                    <p className="text-xs md:text-base text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                      {page.desc}
                    </p>
                  </div>
                </div>

                {/* Corner light reflections - crystal sparkle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/25 blur-2xl rounded-full group-hover:bg-white/35 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-4 h-4 bg-white/40 blur-sm rounded-full" />
                {/* Bottom colored reflection */}
                <div className={`absolute -bottom-8 -left-8 w-32 h-32 ${page.accent} opacity-30 blur-2xl rounded-full group-hover:opacity-50 transition-all duration-500`} />
                
                {/* Bottom edge shadow for depth */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
              </div>
            </Link>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home
