import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCamera, FiImage, FiMaximize2, FiX } from 'react-icons/fi'
import GlassCard from '../components/GlassCard'

const galleryPhotos = [
  { src: '/gallery/gallery-01.jpg', title: 'Building With Friends', category: 'Team' },
  { src: '/gallery/gallery-02.jpg', title: 'Project Presentation', category: 'Campus' },
  { src: '/gallery/gallery-03.jpg', title: 'Tech Team Moment', category: 'Events' },
  { src: '/gallery/gallery-04.jpg', title: 'Early Memories', category: 'Personal' },
  { src: '/gallery/gallery-05.jpg', title: 'Team Dinner', category: 'Life' },
  { src: '/gallery/gallery-06.jpg', title: 'Networking Session', category: 'Z-SPOT' },
  { src: '/gallery/gallery-07.jpg', title: 'Work Setup', category: 'Z-SPOT' },
  { src: '/gallery/gallery-08.jpg', title: 'Hands-on Build', category: 'Z-SPOT' },
  { src: '/gallery/gallery-09.jpg', title: 'Creative Team', category: 'Team' },
  { src: '/gallery/gallery-10.jpg', title: 'Blue Ox Visit', category: 'Community' },
  { src: '/gallery/gallery-11.jpg', title: 'Group Energy', category: 'Community' },
  { src: '/gallery/gallery-12.jpg', title: 'Campus Portrait', category: 'Personal' },
  { src: '/gallery/gallery-13.jpg', title: 'Formal Moment', category: 'Personal' },
  { src: '/gallery/gallery-14.jpg', title: 'Team Portrait', category: 'Community' },
  { src: '/gallery/gallery-15.jpg', title: 'Pitching Ideas', category: 'Campus' },
  { src: '/gallery/gallery-16.jpg', title: 'Presentation Day', category: 'Campus' },
  { src: '/gallery/gallery-17.jpg', title: 'Gaming Setup', category: 'Community' },
  { src: '/gallery/gallery-18.jpg', title: 'Studio Interview', category: 'Media' },
  { src: '/gallery/gallery-19.jpg', title: 'Z-SPOT Brand', category: 'Startup' },
  { src: '/gallery/gallery-20.jpg', title: 'Event Style', category: 'Personal' },
  { src: '/gallery/gallery-21.jpg', title: 'Hotspot Setup', category: 'Z-SPOT' },
  { src: '/gallery/gallery-22.jpg', title: 'Tech Community', category: 'Z-SPOT' },
  { src: '/gallery/gallery-23.jpg', title: 'Outdoor Conversation', category: 'Life' },
  { src: '/gallery/gallery-24.jpg', title: 'Full House Build', category: 'Z-SPOT' },
  { src: '/gallery/gallery-25.jpg', title: 'Learning Session', category: 'Campus' },
  { src: '/gallery/gallery-26.jpg', title: 'Event Team Photo', category: 'Events' },
  { src: '/gallery/gallery-27.jpg', title: 'Focused Build', category: 'Team' },
  { src: '/gallery/gallery-28.jpg', title: 'Opaki Portrait', category: 'Personal' },
  { src: '/gallery/gallery-29.jpg', title: 'Formal Crew', category: 'Events' },
]

const featuredPhotos = galleryPhotos.slice(0, 3)

const categoryStyles = {
  Team: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/20',
  Campus: 'bg-blue-500/15 text-blue-200 border-blue-400/20',
  Events: 'bg-purple-500/15 text-purple-200 border-purple-400/20',
  Personal: 'bg-pink-500/15 text-pink-200 border-pink-400/20',
  Life: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/20',
  'Z-SPOT': 'bg-sky-500/15 text-sky-200 border-sky-400/20',
  Community: 'bg-amber-500/15 text-amber-100 border-amber-400/20',
  Media: 'bg-violet-500/15 text-violet-200 border-violet-400/20',
  Startup: 'bg-cyan-500/15 text-cyan-100 border-cyan-400/20',
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section className="relative min-h-screen px-4 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 w-[32rem] h-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 w-[24rem] h-[24rem] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 text-cyan-300 mb-5">
            <span className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
              <FiCamera className="w-5 h-5" />
            </span>
            <span className="uppercase tracking-[0.24em] text-xs font-semibold">Gallery</span>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-end">
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">
                Moments Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
                A visual collection of my tech journey, campus moments, business work, community sessions, events, and the people I build with.
              </p>
            </div>

            <GlassCard className="p-5 md:p-6" hover={false}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-cyan-300">{galleryPhotos.length}</p>
                  <p className="text-xs md:text-sm text-gray-400">Photos</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-300">8</p>
                  <p className="text-xs md:text-sm text-gray-400">Stories</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-purple-300">100%</p>
                  <p className="text-xs md:text-sm text-gray-400">Real Moments</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {featuredPhotos.map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedPhoto(photo)}
              className={`group text-left ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <GlassCard className="p-0 overflow-hidden h-full" glowColor={index === 0 ? 'cyan' : 'purple'}>
                <div className={`relative ${index === 0 ? 'aspect-[16/10] lg:aspect-[16/9]' : 'aspect-[16/10]'}`}>
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
                    <div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs border ${categoryStyles[photo.category]}`}>
                        {photo.category}
                      </span>
                      <h2 className="text-white font-display text-xl md:text-3xl font-semibold mt-3">{photo.title}</h2>
                    </div>
                    <span className="hidden sm:flex p-3 rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-xl">
                      <FiMaximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {galleryPhotos.slice(3).map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.25) }}
              onClick={() => setSelectedPhoto(photo)}
              className="group w-full mb-5 break-inside-avoid text-left"
            >
              <GlassCard className="p-0 overflow-hidden" glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}>
                <div className={`relative ${index % 5 === 0 ? 'aspect-[4/5]' : index % 4 === 0 ? 'aspect-[16/10]' : 'aspect-[3/2]'}`}>
                  <img src={photo.src} alt={photo.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs border backdrop-blur-xl ${categoryStyles[photo.category]}`}>
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
                    <h3 className="text-white font-semibold text-base md:text-lg drop-shadow-lg">{photo.title}</h3>
                    <span className="p-2 rounded-full bg-white/10 border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiImage className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl px-4 py-6 md:p-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-14 right-0 md:-right-2 p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
                aria-label="Close gallery preview"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
                <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full max-h-[78vh] object-contain bg-black" />
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-black/60">
                  <div>
                    <h3 className="text-white font-display text-xl md:text-2xl font-semibold">{selectedPhoto.title}</h3>
                    <p className="text-gray-400 text-sm">Opaki Jonathan gallery</p>
                  </div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs border ${categoryStyles[selectedPhoto.category]}`}>
                    {selectedPhoto.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
