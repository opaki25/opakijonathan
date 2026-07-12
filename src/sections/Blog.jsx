import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import GlassCard from '../components/GlassCard'
import GlassButton from '../components/GlassButton'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FiCalendar, FiClock, FiArrowRight, FiX } from 'react-icons/fi'

const Blog = () => {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPost, setSelectedPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React and Tailwind CSS',
      excerpt: 'A comprehensive guide to setting up a modern React project with Tailwind CSS for rapid UI development.',
      content: `
# Getting Started with React and Tailwind CSS

React and Tailwind CSS are a powerful combination for building modern web applications. Here's how to get started:

## Why This Stack?

- **React** provides a component-based architecture
- **Tailwind CSS** offers utility-first styling
- Together, they enable rapid development

## Quick Setup

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Best Practices

1. Use component composition
2. Leverage Tailwind's utility classes
3. Keep your components small and focused
4. Use custom CSS sparingly

Happy coding!
      `,
      date: '2025-12-15',
      readTime: '5 min',
      tags: ['React', 'Tailwind', 'Tutorial'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      title: 'My Journey into Cybersecurity',
      excerpt: 'Exploring the fascinating world of cybersecurity and why it matters more than ever in our digital age.',
      content: `
# My Journey into Cybersecurity

As an IT student, cybersecurity has always fascinated me. Here's why I'm pursuing this path:

## The Digital Landscape

Our world is increasingly connected, making security more critical than ever.

## Key Areas of Interest

- **Network Security**: Protecting data in transit
- **Application Security**: Securing web and mobile apps
- **Incident Response**: Handling security breaches

## Learning Path

I'm currently focusing on:

1. Understanding network protocols
2. Learning about common vulnerabilities
3. Practicing with CTF challenges
4. Building secure applications

The journey continues!
      `,
      date: '2025-11-28',
      readTime: '4 min',
      tags: ['Cybersecurity', 'Career', 'Learning'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Building Glassmorphism UIs',
      excerpt: 'Learn how to create stunning glass-effect interfaces using CSS backdrop-filter and modern design principles.',
      content: `
# Building Glassmorphism UIs

Glassmorphism is a popular design trend that creates beautiful, frosted glass effects.

## Key Properties

\`\`\`css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
\`\`\`

## Tips for Great Glass Effects

1. Use subtle transparency
2. Add soft shadows
3. Include gentle gradients
4. Don't forget the border highlight

## Performance Considerations

Backdrop-filter can be expensive. Use it wisely and test on mobile devices.

The result? Stunning, modern interfaces!
      `,
      date: '2025-11-10',
      readTime: '3 min',
      tags: ['CSS', 'Design', 'UI/UX'],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section id="blog" className="relative py-24 px-4" ref={ref}>
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
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
              : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
            }
          `}>
            Blog
          </span>
          <h2 className={`
            font-display font-bold text-4xl md:text-5xl
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Thoughts, tutorials, and insights from my journey in tech
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col" hover={true}>
                {/* Post Header Image */}
                <div className={`
                  h-32 bg-gradient-to-br ${post.gradient} opacity-80
                  flex items-center justify-center relative overflow-hidden
                `}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative text-white font-display font-bold text-lg">
                    Blog
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`
                          px-2 py-0.5 rounded text-xs
                          ${isDark 
                            ? 'bg-white/5 text-gray-400' 
                            : 'bg-gray-100 text-gray-600'
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`
                    font-display font-semibold text-lg mb-2 line-clamp-2
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {post.title}
                  </h3>

                  <p className={`
                    text-sm mb-4 line-clamp-2 flex-1
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className={`
                    flex items-center gap-4 text-xs mb-4
                    ${isDark ? 'text-gray-500' : 'text-gray-500'}
                  `}>
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Read More */}
                  <button
                    onClick={() => setSelectedPost(post)}
                    className={`
                      flex items-center gap-2 text-sm font-medium
                      ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'}
                      transition-colors
                    `}
                  >
                    Read More
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`
              relative max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-2xl
              ${isDark 
                ? 'bg-dark-800 border border-white/10' 
                : 'bg-white border border-gray-200'
              }
              shadow-2xl
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`
              sticky top-0 p-6 border-b
              ${isDark ? 'bg-dark-800 border-white/10' : 'bg-white border-gray-200'}
            `}>
              <button
                onClick={() => setSelectedPost(null)}
                className={`
                  absolute top-4 right-4 p-2 rounded-lg
                  ${isDark 
                    ? 'bg-white/5 text-gray-400 hover:bg-white/10' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                <FiX size={20} />
              </button>

              <div className="flex flex-wrap gap-2 mb-3">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                      px-2 py-0.5 rounded text-xs
                      ${isDark 
                        ? 'bg-white/5 text-gray-400' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className={`
                font-display font-bold text-2xl
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {selectedPost.title}
              </h2>

              <div className={`
                flex items-center gap-4 text-sm mt-2
                ${isDark ? 'text-gray-500' : 'text-gray-500'}
              `}>
                <span className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock size={14} />
                  {selectedPost.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className={`
              p-6 prose prose-sm max-w-none
              ${isDark 
                ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-code:text-cyan-400 prose-pre:bg-dark-900' 
                : 'prose-gray'
              }
            `}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Blog
