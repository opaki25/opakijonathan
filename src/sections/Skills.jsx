import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import GlassCard from '../components/GlassCard'
import { 
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaGithub
} from 'react-icons/fa'
import { 
  SiDjango, SiTailwindcss, SiMikrotik, SiVercel
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const Skills = () => {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 80, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, level: 75, color: '#61DAFB' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 80, color: '#3776AB' },
        { name: 'Django', icon: <SiDjango />, level: 70, color: '#092E20' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 75, color: '#F05032' },
        { name: 'VS Code', icon: <VscCode />, level: 90, color: '#007ACC' },
        { name: 'MikroTik', icon: <SiMikrotik />, level: 70, color: '#293239' },
        { name: 'Figma', icon: <FaFigma />, level: 65, color: '#F24E1E' },
        { name: 'Vercel', icon: <SiVercel />, level: 80, color: isDark ? '#fff' : '#000' },
        { name: 'GitHub', icon: <FaGithub />, level: 85, color: isDark ? '#fff' : '#181717' },
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={`
            inline-block px-4 py-2 rounded-full text-sm font-medium mb-4
            ${isDark 
              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
              : 'bg-purple-100 text-purple-700 border border-purple-200'
            }
          `}>
            My Skills
          </span>
          <h2 className={`
            font-display font-bold text-4xl md:text-5xl
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of tools and technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className={`
                font-display font-semibold text-xl mb-6
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <GlassCard className="p-4" glowColor={categoryIndex % 2 === 0 ? 'cyan' : 'purple'}>
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div 
                          className={`
                            w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                            ${isDark ? 'bg-white/5' : 'bg-white/50'}
                          `}
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        
                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {skill.name}
                            </span>
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className={`
                            h-2 rounded-full overflow-hidden
                            ${isDark ? 'bg-white/10' : 'bg-gray-200'}
                          `}>
                            <motion.div
                              className="h-full rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` 
                              }}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GlassCard className="p-8">
            <h3 className={`
              font-display font-semibold text-xl mb-6 text-center
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Other Tools & Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Antigravity', 'Google Stitch', 'Namecheap', 'Operating Systems', 'AI Tools'].map((tool) => (
                <span
                  key={tool}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium
                    ${isDark 
                      ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/30 hover:text-cyan-400' 
                      : 'bg-white/50 text-gray-700 border border-white/80 hover:border-cyan-400/50 hover:text-cyan-600'
                    }
                    transition-all duration-300 cursor-default
                  `}
                >
                  {tool}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
