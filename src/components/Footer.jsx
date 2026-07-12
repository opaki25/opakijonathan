import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/opaki25', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/opakrwoth-jonathan', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:jonathanopaki@gmail.com', label: 'Email' },
    { icon: <FiPhone />, href: 'https://wa.me/256777038299', label: 'WhatsApp' },
  ]

  return (
    <footer 
      className={`
        relative py-16 px-4 bg-black border-t border-white/[0.06]
      `}
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/profile-icon-192.png"
                alt="Opakrwoth Jonathan"
                className="w-10 h-10 rounded-xl object-cover shadow-[0_4px_20px_rgba(0,212,255,0.3)] ring-1 ring-cyan-400/30"
              />
              <span className="font-display font-bold text-lg text-white">
                OPAKI
              </span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Opakrwoth Jonathan
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-gray-400 hover:text-cyan-400 border border-white/[0.08] hover:border-cyan-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-lg transition-all duration-300 ease-out"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <span className="text-lg">{link.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
