import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import GlassCard from '../components/GlassCard'
import GlassButton from '../components/GlassButton'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

const Projects = () => {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Attendeez',
      description: 'Event RSVP and attendance management system. Track event registrations, manage guest lists, and monitor attendance in real-time.',
      image: '/projects/attendeez.png',
      tech: ['React', 'Python', 'Django', 'PostgreSQL'],
      liveUrl: 'https://attendeez.site',
      githubUrl: 'https://github.com/opaki25/attendeez',
      gradient: 'from-cyan-500 to-blue-500',
      featured: true,
    },
    {
      id: 2,
      title: 'Guestz',
      description: 'Comprehensive hotel management system for handling bookings, guest operations, room management, and billing.',
      image: '/projects/guestz.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/opaki25/guestz',
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
    },
  ]

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
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
              ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' 
              : 'bg-pink-100 text-pink-700 border border-pink-200'
            }
          `}>
            My Work
          </span>
          <h2 className={`
            font-display font-bold text-4xl md:text-5xl
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of projects that demonstrate my skills in web development and problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <GlassCard 
                className="overflow-hidden group h-full" 
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
              >
                {/* Project Image/Preview */}
                <div className="relative h-48 overflow-hidden">
                  {/* Gradient placeholder */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${project.gradient}
                    opacity-20 group-hover:opacity-30 transition-opacity duration-500
                  `} />
                  
                  {/* Decorative 3D elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`
                        w-32 h-32 rounded-2xl bg-gradient-to-br ${project.gradient}
                        opacity-80 shadow-2xl
                      `}
                      animate={hoveredProject === project.id ? { 
                        rotateY: 15, 
                        rotateX: -15,
                        scale: 1.1 
                      } : {}}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute w-16 h-16 rounded-xl bg-white/20 backdrop-blur-lg"
                      style={{ top: '20%', right: '25%' }}
                      animate={hoveredProject === project.id ? { y: -10 } : { y: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute w-12 h-12 rounded-lg bg-white/10 backdrop-blur-lg"
                      style={{ bottom: '20%', left: '25%' }}
                      animate={hoveredProject === project.id ? { y: 10 } : { y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className={`
                      absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                      bg-gradient-to-r ${project.gradient} text-white
                    `}>
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`
                    font-display font-bold text-2xl mb-3
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {project.title}
                  </h3>
                  
                  <p className={`
                    mb-4 line-clamp-3
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`
                          px-3 py-1 rounded-lg text-xs font-medium
                          ${isDark 
                            ? 'bg-white/5 text-gray-300 border border-white/10' 
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                          }
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <GlassButton
                      variant="primary"
                      size="sm"
                      icon={<FiExternalLink />}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Demo
                    </GlassButton>
                    <GlassButton
                      variant="outline"
                      size="sm"
                      icon={<FiGithub />}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      Code
                    </GlassButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlassButton
            variant="default"
            size="lg"
            icon={<FiArrowRight />}
            onClick={() => window.open('https://github.com/opaki25', '_blank')}
          >
            View More on GitHub
          </GlassButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
