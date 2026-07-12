import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const GlassButton = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon,
  className = '',
  ...props 
}) => {
  const { isDark } = useTheme()
  
  const variants = {
    default: isDark 
      ? `bg-gradient-to-br from-white/[0.12] to-white/[0.04] 
         border-white/[0.15] 
         hover:border-cyan-400/40 
         hover:shadow-[0_8px_32px_rgba(0,212,255,0.15),0_0_48px_rgba(0,212,255,0.08)]
         hover:from-white/[0.16] hover:to-white/[0.06]`
      : `bg-gradient-to-br from-white/90 to-white/70 
         border-white/80 
         hover:border-cyan-400/50 
         hover:shadow-[0_8px_32px_rgba(0,212,255,0.12)]`,
    primary: `bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 
              background-size-200 
              border-transparent 
              hover:shadow-[0_8px_32px_rgba(0,212,255,0.4),0_0_48px_rgba(0,212,255,0.2)]
              hover:brightness-110`,
    secondary: `bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
                background-size-200 
                border-transparent 
                hover:shadow-[0_8px_32px_rgba(168,85,247,0.4),0_0_48px_rgba(168,85,247,0.2)]
                hover:brightness-110`,
    outline: isDark
      ? `bg-transparent 
         border-cyan-400/30 
         text-cyan-400 
         hover:bg-cyan-400/[0.08] 
         hover:border-cyan-400/50
         hover:shadow-[0_0_32px_rgba(0,212,255,0.15)]`
      : `bg-transparent 
         border-cyan-500/50 
         text-cyan-600 
         hover:bg-cyan-500/[0.08]
         hover:border-cyan-500`,
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-2xl font-semibold
        backdrop-blur-2xl border
        transition-all duration-400 ease-out
        shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]
        ${variants[variant]}
        ${sizes[size]}
        ${isDark ? 'text-white' : variant === 'primary' || variant === 'secondary' ? 'text-white' : 'text-gray-800'}
        ${className}
      `}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Shimmer effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </span>
    </motion.button>
  )
}

export default GlassButton
