import GlassCard from '../components/GlassCard'

const awards = [
  { title: 'IEEE Student Branch Membership', image: '/media/ieee-student-branch.png', description: 'Joined the IEEE Mbarara University Student Branch, connecting with a global community of engineers and technology professionals.' },
  { title: 'UYIGF 2026 — Team Win', image: '/media/uyigf-team.jpg', description: 'DIRI / Netizens winning team at the Uganda Youth Internet Governance Forum, July 2026.' },
  { title: 'CITT Product Development Grant', image: '/media/citt-award.jpg', description: 'DIRI received a Product Development Grant Award from the Centre for Innovations and Technology Transfer at MUST.' },
  { title: 'World Tourism Day 2026', image: '/media/tourism-award.jpg', description: 'Winner of the World Tourism Day 2026 poster competition.' },
  { title: 'Millennium Fellowship', image: '/media/millennium-fellowship-2026.png', description: 'Selected for the Class of 2026, continuing my journey in leadership and social impact.' },
]

export default function Achievements({ embedded = false }) {
  return (
    <section className={embedded ? 'mt-16' : 'max-w-6xl mx-auto px-4 py-24'} aria-label="Achievements and leadership">
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">
        Achievements & <span className="gradient-text">Milestones</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {awards.map(award => (
          <GlassCard key={award.title} className="overflow-hidden" hover={false}>
            {award.image ? (
              <a href={award.image} target="_blank" rel="noreferrer" aria-label={`View ${award.title} photograph`}>
                <img src={award.image} alt={award.title} loading="lazy" className="w-full h-56 object-contain bg-black/30" />
              </a>
            ) : (
              <div className="h-56 flex items-center justify-center bg-cyan-500/5 font-display text-6xl font-bold gradient-text">2026</div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{award.title}</h3>
              <p className="text-gray-400 leading-relaxed">{award.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="p-7 md:p-8 mt-8" hover={false}>
        <h3 className="font-display text-2xl font-semibold text-white mb-4">Leadership & Communities</h3>
        <p className="text-gray-400 leading-relaxed">
          Through the Millennium Fellowship Class of 2026, IEEE and technology communities,
          hackathons and innovation programmes, I continue to learn with others, lead teams
          and develop ideas with practical social impact.
        </p>
      </GlassCard>
    </section>
  )
}
