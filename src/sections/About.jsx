import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight, FiBriefcase, FiCode, FiCpu, FiLayers, FiMail, FiShield, FiTarget, FiTool, FiZap } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import GlassButton from '../components/GlassButton'
import GlassCard from '../components/GlassCard'
import Achievements from './Achievements'

const About = () => {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const workAreas = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Building responsive websites and web apps using HTML, CSS, JavaScript, React, Django, and Python.',
    },
    {
      icon: <FiLayers />,
      title: 'UI/UX Design',
      description: 'Designing clean interfaces that feel simple, modern, and easy for real users to understand.',
    },
    {
      icon: <FiCpu />,
      title: 'Networking',
      description: 'Working with internet infrastructure, WiFi hotspot setups, and MikroTik-based network systems.',
    },
    {
      icon: <FiShield />,
      title: 'Cybersecurity',
      description: 'Growing into security, system protection, ethical thinking, and stronger digital safety practices.',
    },
    {
      icon: <FiBriefcase />,
      title: 'Software/Product Building',
      description: 'Creating practical business systems, apps, and digital products for students and small businesses.',
    },
    {
      icon: <FiZap />,
      title: 'AI Tools & Automation',
      description: 'Using AI tools to speed up design, development, research, and problem-solving workflows.',
    },
  ]

  const journey = [
    'Started learning technology and design from curiosity about how digital systems work.',
    'Built small websites, app ideas, and business tools while sharpening my development skills.',
    'Moved into networking, WiFi hotspot systems, MikroTik tools, and internet infrastructure.',
    'Co-running Z-SPOT across four service locations while developing software and design work through Zhed Labs.',
    'Leading DIRI through market research with 49 responses, a UYIGF 2026 team win and a CITT product development grant.',
    'Joining the Millennium Fellowship Class of 2026 and winning the World Tourism Day 2026 poster competition.',
  ]

  const values = [
    'Problem Solver',
    'Fast Learner',
    'Creative Thinker',
    'Team Player',
    'Innovative',
    'Reliable',
    'Business Minded',
    'Detail Oriented',
  ]

  const stats = [
    { value: '2', label: 'Competition Wins: UYIGF & Tourism Poster' },
    { value: '4', label: 'Z-SPOT Service Locations' },
    { value: '49', label: 'DIRI Survey Responses' },
    { value: '2026', label: 'Millennium Fellowship Class' },
  ]

  const cardText = isDark ? 'text-gray-300' : 'text-gray-600'
  const mutedText = isDark ? 'text-gray-400' : 'text-gray-600'
  const headingText = isDark ? 'text-white' : 'text-gray-900'

  return (
    <section id="about" className="relative py-24 px-4" ref={ref}>
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
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
              : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
            }
          `}>
            About Me
          </span>
          <h2 className={`font-display font-bold text-4xl md:text-5xl ${headingText}`}>
            Building with <span className="gradient-text">Purpose</span>
          </h2>
          <p className={`mt-5 max-w-3xl mx-auto text-base md:text-lg leading-relaxed ${mutedText}`}>
            I am Opakrwoth Jonathan, also known as Opaki Jonathan, a second-year IT student at Mbarara
            University of Science and Technology in Uganda.
          </p>
        </motion.div>

        {/* Personal Background */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="p-2 overflow-hidden" glowColor="purple">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <img
                  src="/profile-portrait.jpg"
                  alt="Opakrwoth Jonathan"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <GlassCard className="p-7 md:p-8" glowColor="cyan">
              <div className="flex items-center gap-3 mb-5">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-xl
                  ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}
                `}>
                  <FiTarget />
                </div>
                <div>
                  <h3 className={`font-display font-semibold text-2xl ${headingText}`}>
                    Personal Background
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    Developer | Entrepreneur | Networking & Cybersecurity Enthusiast
                  </p>
                </div>
              </div>

              <div className={`space-y-4 leading-relaxed ${cardText}`}>
                <p>
                  My journey started with curiosity about how systems work, how websites are built,
                  how networks connect people, and how technology can make everyday life easier.
                  That curiosity grew into a serious passion for software development, UI/UX design,
                  networking, cybersecurity, and using AI tools to build better solutions.
                </p>
                <p>
                  Today, I lead DIRI, our award-winning digital-rights innovation, and build practical digital products while learning how
                  to design stronger network infrastructure. I work with projects like Z-SPOT, a
                  WiFi hotspot and networking business, and Zhed Labs, a software and design startup
                  focused on useful digital solutions.
                </p>
                <p>
                  My long-term goal is to become a strong cybersecurity and networking specialist
                  while continuing to build software products and digital businesses that help
                  students, small businesses, and communities.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* What I Do */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h3 className={`font-display font-bold text-3xl ${headingText}`}>
                What I Do
              </h3>
              <p className={`mt-2 max-w-2xl ${mutedText}`}>
                A mix of development, design, networking, and product thinking.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workAreas.map((item, index) => (
              <GlassCard
                key={item.title}
                className="p-6 h-full"
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
              >
                <div className={`
                  w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-xl
                  ${isDark
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400'
                    : 'bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600'
                  }
                `}>
                  {item.icon}
                </div>
                <h4 className={`font-semibold text-lg mb-2 ${headingText}`}>
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed ${mutedText}`}>
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Journey + Mission */}
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <GlassCard className="p-7 md:p-8 h-full" glowColor="cyan">
              <div className="flex items-center gap-3 mb-7">
                <div className={`
                  w-11 h-11 rounded-xl flex items-center justify-center text-xl
                  ${isDark ? 'bg-white/5 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}
                `}>
                  <FiTool />
                </div>
                <h3 className={`font-display font-bold text-2xl ${headingText}`}>
                  My Journey
                </h3>
              </div>

              <div className="space-y-5">
                {journey.map((step, index) => (
                  <div key={step} className="relative flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`
                        w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold
                        ${isDark
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                        }
                      `}>
                        {index + 1}
                      </div>
                      {index !== journey.length - 1 && (
                        <div className={`w-px flex-1 mt-2 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <p className={`pt-1 leading-relaxed ${cardText}`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <GlassCard className="p-7 md:p-8 h-full flex flex-col justify-between" glowColor="purple">
              <div>
                <h3 className={`font-display font-bold text-2xl mb-4 ${headingText}`}>
                  My Mission
                </h3>
                <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  To use technology to create practical, affordable, and modern digital solutions
                  that solve real problems and empower people.
                </p>
              </div>
              <div className={`
                mt-8 rounded-2xl p-4 border
                ${isDark ? 'bg-cyan-500/5 border-cyan-500/10' : 'bg-cyan-50 border-cyan-100'}
              `}>
                <p className={`text-sm leading-relaxed ${mutedText}`}>
                  I enjoy building simple, useful products that can support students, small
                  businesses, and communities.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <GlassCard className="p-7 md:p-8" hover={false}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className={`font-display font-bold text-2xl ${headingText}`}>
                  Values & Soft Skills
                </h3>
                <p className={`mt-2 ${mutedText}`}>
                  The mindset I try to bring into every project.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-colors
                    ${isDark
                      ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/30'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-cyan-300'
                    }
                  `}
                >
                  {value}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center" hover={false}>
              <div className="font-display font-bold text-3xl md:text-4xl mb-2 gradient-text">
                {stat.value}
              </div>
              <p className={`text-sm leading-tight ${mutedText}`}>
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </motion.div>

        <Achievements embedded />

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <GlassCard className="p-7 md:p-8" glowColor="cyan">
            <h3 className={`font-display font-bold text-2xl mb-3 ${headingText}`}>
              Let&apos;s Build Something Useful
            </h3>
            <p className={`max-w-2xl mx-auto mb-7 ${mutedText}`}>
              I am open to learning, collaboration, practical tech projects, and opportunities
              that help me grow while solving real problems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlassButton
                variant="primary"
                icon={<FiArrowRight />}
                onClick={() => { window.location.href = '/projects' }}
              >
                View My Projects
              </GlassButton>
              <GlassButton
                variant="outline"
                icon={<FiMail />}
                onClick={() => { window.location.href = '/contact' }}
              >
                Contact Me
              </GlassButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default About
