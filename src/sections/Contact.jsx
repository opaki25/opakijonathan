import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import GlassCard from '../components/GlassCard'
import GlassButton from '../components/GlassButton'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi'

const Contact = () => {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'jonathanopaki@gmail.com',
      href: 'mailto:jonathanopaki@gmail.com',
    },
    {
      icon: <FiMail />,
      label: 'Alternative Email',
      value: 'opakijonathan30@gmail.com',
      href: 'mailto:opakijonathan30@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'WhatsApp',
      value: '+256 777 038 299',
      href: 'https://wa.me/256777038299',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Uganda',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/opaki25' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/opakrwoth-jonathan' },
    { icon: <FaXTwitter />, href: 'https://x.com/Opaki_J', label: 'X' },
    { icon: <FiInstagram />, href: 'https://www.instagram.com/opaki_jonathan_/', label: 'Instagram' },
    { icon: <FiMessageCircle />, label: 'WhatsApp', href: 'https://wa.me/256777038299' },
  ]

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
    
    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 px-4" ref={ref}>
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
              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
              : 'bg-blue-100 text-blue-700 border border-blue-200'
            }
          `}>
            Get In Touch
          </span>
          <h2 className={`
            font-display font-bold text-4xl md:text-5xl
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`
                        w-full px-4 py-3 rounded-xl glass-input
                        ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}
                      `}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`
                        w-full px-4 py-3 rounded-xl glass-input
                        ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}
                      `}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-xl glass-input
                      ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}
                    `}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`
                      w-full px-4 py-3 rounded-xl glass-input resize-none
                      ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}
                    `}
                    placeholder="Your message..."
                  />
                </div>

                <GlassButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={isSubmitting ? null : <FiSend />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                </GlassButton>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <GlassCard className="p-8">
              <h3 className={`font-display font-semibold text-xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center text-xl
                      ${isDark 
                        ? 'bg-white/5 text-cyan-400 group-hover:bg-white/10' 
                        : 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100'
                      }
                      transition-colors duration-300
                    `}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.label}
                      </p>
                      <p className={`font-medium break-all ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard className="p-8">
              <h3 className={`font-display font-semibold text-xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center text-xl
                      ${isDark 
                        ? 'bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10' 
                        : 'bg-gray-100 text-gray-600 hover:text-cyan-600 hover:bg-gray-200'
                      }
                      transition-all duration-300
                    `}
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Availability Card */}
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <h3 className={`font-display font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Available for Opportunities
                </h3>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm currently open to freelance projects, collaborations, and full-time opportunities. 
                Let's build something amazing together!
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
