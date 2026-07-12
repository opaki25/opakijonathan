import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiBriefcase, FiCheckCircle, FiCpu, FiLayers, FiMail, FiPlusCircle, FiTarget, FiWifi, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import GlassButton from '../components/GlassButton'
import GlassCard from '../components/GlassCard'

const startups = [
  {
    name: 'Z-SPOT',
    category: 'WiFi Hotspot & Networking Business',
    status: 'Active',
    role: 'Founder / CEO',
    tools: ['MikroTik', 'WiFi Hotspot', 'Networking', 'Internet Infrastructure'],
    icon: <FiWifi />,
    description:
      'Z-SPOT is a WiFi hotspot and networking business focused on providing affordable and reliable internet access to students, hostels, and local communities.',
    goal:
      'To make internet access easier, cheaper, and more reliable for people around me.',
  },
  {
    name: 'Zhed Labs',
    category: 'Software & Digital Solutions Startup',
    status: 'Building',
    role: 'Founder',
    tools: ['Web Design', 'React', 'Django', 'Automation', 'UI/UX'],
    icon: <FiLayers />,
    description:
      'Zhed Labs is a software and design startup focused on creating practical digital solutions such as websites, apps, business systems, and automation tools.',
    goal:
      'To build affordable digital products that solve real problems for businesses, students, and communities.',
  },
  {
    name: 'Z-NET',
    category: 'WiFi Billing & Hotspot Management System',
    status: 'In Development',
    role: 'Product Builder',
    tools: ['Hotspot Billing', 'Vouchers', 'Payments', 'User Management', 'MikroTik'],
    icon: <FiCpu />,
    description:
      'Z-NET is a hotspot billing and management system designed to help WiFi businesses manage users, vouchers, payments, and internet access more efficiently.',
    goal:
      'To create a flexible and affordable billing system for hotspot businesses.',
  },
]

const statusStyles = {
  Active: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Building: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'In Development': 'bg-amber-500/10 text-amber-300 border-amber-500/20',
}

const Startups = () => {
  const { isDark } = useTheme()
  const [selectedStartup, setSelectedStartup] = useState(null)

  const headingText = isDark ? 'text-white' : 'text-gray-900'
  const mutedText = isDark ? 'text-gray-400' : 'text-gray-600'
  const bodyText = isDark ? 'text-gray-300' : 'text-gray-700'

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
            ${isDark
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
              : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
            }
          `}>
            <FiBriefcase />
            Ventures
          </span>
          <h1 className={`font-display font-bold text-4xl md:text-6xl ${headingText}`}>
            Startups & <span className="gradient-text">Businesses</span>
          </h1>
          <p className={`mt-5 max-w-3xl mx-auto text-base md:text-lg leading-relaxed ${mutedText}`}>
            This section brings together my real ventures, brands, business ideas, and products
            outside normal coding projects. These are the practical businesses I am building,
            testing, or growing.
          </p>
        </motion.div>

        {/* Startup Cards */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {startups.map((startup, index) => (
            <GlassCard
              key={startup.name}
              className="p-6 h-full"
              glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-xl
                  ${isDark
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400'
                    : 'bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600'
                  }
                `}>
                  {startup.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[startup.status]}`}>
                  {startup.status}
                </span>
              </div>

              <h2 className={`font-display font-bold text-2xl mb-2 ${headingText}`}>
                {startup.name}
              </h2>
              <p className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} text-sm font-medium mb-4`}>
                {startup.category}
              </p>
              <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
                {startup.description}
              </p>

              <div className={`space-y-3 py-4 border-y ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex items-start gap-3">
                  <FiBriefcase className="mt-0.5 text-cyan-400" />
                  <p className={`text-sm ${bodyText}`}>
                    <span className="font-semibold">My Role:</span> {startup.role}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiTarget className="mt-0.5 text-cyan-400" />
                  <p className={`text-sm ${bodyText}`}>
                    <span className="font-semibold">Goal:</span> {startup.goal}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5 mb-6">
                {startup.tools.slice(0, 4).map((tool) => (
                  <span
                    key={tool}
                    className={`
                      px-3 py-1 rounded-lg text-xs
                      ${isDark
                        ? 'bg-white/5 text-gray-300 border border-white/10'
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }
                    `}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <GlassButton
                variant="outline"
                size="sm"
                icon={<FiArrowRight />}
                className="w-full"
                onClick={() => setSelectedStartup(startup)}
              >
                View Details
              </GlassButton>
            </GlassCard>
          ))}

          <GlassCard className="p-6 h-full border-dashed" glowColor="cyan" hover={false}>
            <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center">
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5
                ${isDark ? 'bg-white/5 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}
              `}>
                <FiPlusCircle />
              </div>
              <h2 className={`font-display font-bold text-xl mb-2 ${headingText}`}>
                Future Venture
              </h2>
              <p className={`text-sm leading-relaxed max-w-xs ${mutedText}`}>
                Space reserved for the next startup, brand, or product idea as it grows.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-7 md:p-8 text-center" glowColor="cyan">
            <h2 className={`font-display font-bold text-2xl md:text-3xl mb-3 ${headingText}`}>
              Interested in working together?
            </h2>
            <p className={`max-w-2xl mx-auto mb-7 ${mutedText}`}>
              I am open to partnerships, collaborations, mentorship, and practical opportunities
              around networking, software products, and digital businesses.
            </p>
            <GlassButton
              variant="primary"
              icon={<FiMail />}
              onClick={() => { window.location.href = '/contact' }}
            >
              Contact Me
            </GlassButton>
          </GlassCard>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedStartup && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/75 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedStartup(null)}
        >
          <motion.div
            className={`
              relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-7 md:p-8
              ${isDark
                ? 'bg-[#070b12]/95 border border-white/10'
                : 'bg-white/95 border border-gray-200'
              }
              shadow-[0_24px_80px_rgba(0,0,0,0.45)]
            `}
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedStartup(null)}
              className={`
                absolute top-4 right-4 p-2 rounded-xl transition-colors
                ${isDark ? 'bg-white/5 text-gray-300 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'}
              `}
              aria-label="Close details"
            >
              <FiX />
            </button>

            <div className={`
              w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5
              ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}
            `}>
              {selectedStartup.icon}
            </div>
            <h2 className={`font-display font-bold text-3xl mb-2 ${headingText}`}>
              {selectedStartup.name}
            </h2>
            <p className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} font-medium mb-5`}>
              {selectedStartup.category}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                ['Status', selectedStartup.status],
                ['My Role', selectedStartup.role],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className={`
                    rounded-2xl p-4 border
                    ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
                  `}
                >
                  <p className={`text-xs uppercase tracking-wide mb-1 ${mutedText}`}>
                    {label}
                  </p>
                  <p className={`font-semibold ${headingText}`}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className={`space-y-5 leading-relaxed ${bodyText}`}>
              <p>{selectedStartup.description}</p>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FiCheckCircle className="text-cyan-400" />
                  <h3 className={`font-semibold ${headingText}`}>Main Goal</h3>
                </div>
                <p>{selectedStartup.goal}</p>
              </div>
              <div>
                <h3 className={`font-semibold mb-3 ${headingText}`}>Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStartup.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`
                        px-3 py-1 rounded-lg text-sm
                        ${isDark
                          ? 'bg-white/5 text-gray-300 border border-white/10'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }
                      `}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Startups
