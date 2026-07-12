import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const AnimatedText = ({ 
  text, 
  className = '',
  delay = 0,
  stagger = 0.03 
}) => {
  const { isDark } = useTheme()
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
