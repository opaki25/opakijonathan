import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  tilt = false,
  glowColor = 'cyan',
  ...props 
}) => {
  const { isDark } = useTheme()
  
  const glowColors = {
    cyan: 'hover:shadow-[0_8px_32px_rgba(0,212,255,0.15),0_0_60px_rgba(0,212,255,0.1)]',
    purple: 'hover:shadow-[0_8px_32px_rgba(168,85,247,0.15),0_0_60px_rgba(168,85,247,0.1)]',
    pink: 'hover:shadow-[0_8px_32px_rgba(236,72,153,0.15),0_0_60px_rgba(236,72,153,0.1)]',
  }

  const baseClasses = `
    relative overflow-hidden rounded-3xl
    ${isDark 
      ? `bg-gradient-to-br from-white/[0.08] to-white/[0.02] 
         border border-white/[0.08] 
         backdrop-blur-2xl 
         shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]` 
      : `bg-gradient-to-br from-white/90 to-white/70 
         border border-white/80 
         backdrop-blur-2xl 
         shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)]`
    }
    ${hover ? `transition-all duration-500 ease-out ${glowColors[glowColor]}` : ''}
  `

  const tiltOptions = {
    max: 15,
    scale: 1.02,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
  }

  if (tilt) {
    return (
      <motion.div
        className={`${baseClasses} ${className}`}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        {...props}
      >
        {/* Top highlight line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Corner accents */}
        <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${isDark ? 'from-cyan-500/10' : 'from-cyan-500/5'} to-transparent rounded-tl-3xl`} />
        <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${isDark ? 'from-purple-500/10' : 'from-purple-500/5'} to-transparent rounded-br-3xl`} />
        
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hover ? { y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${isDark ? 'from-cyan-500/10' : 'from-cyan-500/5'} to-transparent rounded-tl-3xl`} />
      <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${isDark ? 'from-purple-500/10' : 'from-purple-500/5'} to-transparent rounded-br-3xl`} />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlassCard
