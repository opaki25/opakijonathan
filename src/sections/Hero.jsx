import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import GlassButton from '../components/GlassButton'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  const { isDark } = useTheme()

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                ${isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/60 border border-white/80'
                }
                backdrop-blur-lg
              `}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className={`
                font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hi, I'm{' '}
              <span className="relative">
                <span className="gradient-text">OPAKI</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className={`
                text-xl md:text-2xl mb-4 font-medium
                ${isDark ? 'text-gray-300' : 'text-gray-700'}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              IT Specialist & Future{' '}
              <span className="text-cyan-400">Cybersecurity Expert</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className={`
                text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0
                ${isDark ? 'text-gray-400' : 'text-gray-600'}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Year One IT student skilled in UI/UX, Web Development, App Development, 
              and Networking. Building the future of technology from Uganda.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <GlassButton 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </GlassButton>
              
              <GlassButton 
                variant="outline" 
                size="lg"
                icon={<FiMail />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </GlassButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Find me on
              </span>
              {[
                { icon: <FiGithub />, href: 'https://github.com/opaki25', label: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com/in/opakrwoth-jonathan', label: 'LinkedIn' },
    { icon: <FaXTwitter />, href: 'https://x.com/Opaki_J', label: 'X' },
    { icon: <FiInstagram />, href: 'https://www.instagram.com/opaki_jonathan_/', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-3 rounded-xl
                    ${isDark 
                      ? 'bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10' 
                      : 'bg-white/50 text-gray-600 hover:text-cyan-600 hover:bg-white/80'
                    }
                    transition-all duration-300
                  `}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Glass Card */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-[80px] rounded-full scale-125" />
              
              {/* Main glass card */}
              <motion.div
                className={`
                  relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem]
                  ${isDark 
                    ? `bg-gradient-to-br from-white/[0.12] to-white/[0.04] 
                       border border-white/[0.15]
                       shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]` 
                    : `bg-gradient-to-br from-white/90 to-white/60 
                       border border-white/80
                       shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]`
                  }
                  backdrop-blur-2xl
                  flex items-center justify-center
                `}
                animate={{ 
                  rotateY: [0, 3, 0, -3, 0],
                  rotateX: [0, 3, 0, -3, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                {/* Inner gradient */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-purple-500/[0.08]" />
                
                {/* Profile content */}
                <div className="relative z-10 text-center p-8">
                  {/* Avatar */}
                  <div className={`
                    w-24 h-24 mx-auto mb-5 rounded-2xl
                    bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-500
                    flex items-center justify-center text-4xl font-bold text-white
                    shadow-[0_8px_24px_rgba(0,212,255,0.35)]
                  `}>
                    OJ
                  </div>
                  
                  <h3 className={`font-display font-bold text-xl mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Opakrwoth Jonathan
                  </h3>
                  <p className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    IT Specialist
                  </p>
                  <div className={`inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full text-sm font-medium
                    ${isDark 
                      ? 'bg-white/[0.06] text-cyan-400 border border-white/[0.08]' 
                      : 'bg-cyan-50 text-cyan-600 border border-cyan-100'
                    }`}>
                    <span>📍</span> Uganda
                  </div>
                </div>

                {/* Decorative corners */}
                <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'}`} />
                <div className={`absolute bottom-3 left-3 w-6 h-6 rounded-md ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`} />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          p-3 rounded-full
          ${isDark ? 'bg-white/5 text-gray-400' : 'bg-white/50 text-gray-600'}
          backdrop-blur-lg border ${isDark ? 'border-white/10' : 'border-white/60'}
        `}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}

export default Hero
