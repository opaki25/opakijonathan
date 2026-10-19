import { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './portfolio.css';
const projects = [{
  name: 'DIRI',
  category: 'Digital rights · Research · Leadership',
  status: 'Award-winning innovation',
  image: 'diri',
  description: 'Making digital rights information easier to understand and access in Uganda.',
  detail: 'I lead a digital-rights innovation that combines technical work, advocacy and user research. Our team received recognition at UYIGF 2026 and a CITT product development grant.',
  evidence: '49 market survey responses · UYIGF winning team',
  tags: 'React · Digital rights · User research'
}, {
  name: 'Z-SPOT',
  category: 'Connectivity · Business · Infrastructure',
  status: 'Operating business',
  image: 'zspot',
  description: 'Practical internet access for students, hostels and local communities.',
  detail: 'I co-run a Wi-Fi business with four service locations, connecting web design with hands-on networking and day-to-day business experience.',
  evidence: '4 service locations',
  tags: 'MikroTik · Networking · Wi-Fi hotspots'
}, {
  name: 'Attendeez',
  category: 'Events · Web application',
  status: 'In development',
  image: 'attendeez',
  description: 'An event RSVP and attendance management project.',
  detail: 'Exploring a simpler way for organisers to handle registrations, guest lists and attendance. The current deployment and released feature set are being reviewed.',
  tags: 'React · Django · PostgreSQL'
}, {
  name: 'MAGMA',
  category: 'Product exploration',
  status: 'Work in progress',
  description: 'Part of my growing technology product pipeline.',
  detail: 'A full case study will follow as the product scope, my role and demo are ready to share.',
  tags: 'Product development'
}, {
  name: 'Z-NET',
  category: 'Networking · Business software',
  status: 'In development',
  description: 'Hotspot billing and management software for Wi-Fi businesses.',
  detail: 'Designed around hotspot operators, with planned workflows for users, vouchers, payments and access management.',
  tags: 'MikroTik · Hotspot billing · Product design'
}];
const gallery = [['tourism-poster', 'World Tourism Day 2026', 'Winning poster design', 'Design'], ['uyigf-team', 'DIRI at UYIGF', 'The winning team · July 2026', 'Milestones'], ['citt-award', 'From idea to development', 'DIRI · CITT product development grant', 'Milestones'], ['speaking', 'Sharing the idea', 'Presenting and exchanging ideas', 'Community'], ['tourism-award', 'Design recognised', 'World Tourism Day 2026 poster award', 'Design'], ['innovation-pitch', 'Building in public', 'An innovation pitch with the team', 'Community'], ['uyigf-stage', 'A shared milestone', 'Celebrating DIRI at UYIGF', 'Milestones'], ['campus', 'Life beyond the screen', 'On campus', 'Life'], ['outside-work', 'A different perspective', 'Time to explore and recharge', 'Life']];
const navigation = [['/projects', 'Work'], ['/about', 'About'], ['/experience', 'Experience'], ['/achievements', 'Recognition'], ['/gallery', 'Gallery']];
function Heading({
  label,
  title,
  description
}) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{description && <p className="muted intro">{description}</p>}</div>;
}
function Project({
  item,
  index
}) {
  return <article className="project-card"><Link className={`project-visual visual-${index}`} to={`/projects#${item.name.toLowerCase()}`} aria-label={`Explore ${item.name}`}>{item.image ? <img src={`/projects/${item.image}.png`} alt={`${item.name} interface preview`} loading="lazy" /> : <span className="wordmark">{item.name}<small>IN THE MAKING</small></span>}<span className="visual-arrow">↗</span></Link><div className="project-meta"><span>{item.category}</span><span className="status">{item.status}</span></div><h3><Link to={`/projects#${item.name.toLowerCase()}`}>{item.name}</Link></h3><p className="muted">{item.description}</p>{item.evidence && <p className="evidence">{item.evidence}</p>}</article>;
}
function Home() {
  return <>
  <section className="hero wrap"><div className="hero-copy"><p className="eyebrow">● &nbsp; Developer. Founder. Always learning.</p><h1>Ideas are good.<br />Building them<br /><em>is better.</em></h1><p className="hero-description">I’m <strong>Opaki Jonathan</strong>, a developer and entrepreneur in Uganda. I build software, connect communities and turn practical problems into products.</p><div className="actions"><Link className="button primary" to="/projects">Explore my work <span>↗</span></Link><Link className="text-link" to="/about">A little about me <span>→</span></Link></div><p className="hero-footnote">BASED IN UGANDA &nbsp; · &nbsp; BUILDING WITH PURPOSE</p></div><div className="hero-photo"><img src="/media/portrait.jpg" alt="Opaki Jonathan" fetchPriority="high" /><div className="photo-label"><span>THE PERSON BEHIND THE PROJECTS</span><strong>Opaki Jonathan <span>↗</span></strong></div><span className="photo-index">01 / INTRODUCTION</span></div></section>
  <section className="stats wrap" aria-label="Portfolio milestones">{[['02', 'Competition wins', 'UYIGF & tourism poster'], ['04', 'Z-SPOT locations', 'Connectivity in practice'], ['49', 'Survey responses', 'DIRI market research'], ['2026', 'Millennium Fellow', 'Leadership & social impact']].map(([value, label, detail]) => <div key={label}><strong>{value}</strong><span>{label}</span><small>{detail}</small></div>)}</section>
  <section className="section wrap"><div className="heading-row"><Heading label="01 / SELECTED WORK" title="Built for real people." description="Digital rights, everyday connectivity, and the products taking shape along the way." /><Link className="text-link" to="/projects">All projects ↗</Link></div><div className="project-grid">{projects.slice(0, 2).map((item, index) => <Project key={item.name} item={item} index={index} />)}</div></section>
  <section className="recognition-band"><div className="wrap recognition-layout"><img src="/media/uyigf-team.jpg" alt="DIRI team holding the winning cheque at UYIGF 2026" loading="lazy" /><div><p className="eyebrow">MORE THAN AN IDEA</p><h2>Built together.<br /><em>Recognised together.</em></h2><p className="muted">From researching digital rights to presenting DIRI on stage, the most meaningful milestones have been team efforts.</p><Link className="text-link" to="/achievements">The milestones ↗</Link></div></div></section>
  <section className="section wrap about-preview"><Heading label="02 / THE BIGGER PICTURE" title="A student mindset. A founder’s drive." /><div><p className="large-copy">I’m a second-year IT student at Mbarara University of Science and Technology, learning through the things I build and the people I build with.</p><p className="muted">My work spans software, networking and design. My goal is simple: make useful technology more accessible to the communities around me.</p><Link className="text-link" to="/about">My journey ↗</Link></div></section>
</>;
}
function Projects() {
  return <div className="wrap page"><Heading label="SELECTED WORK / 2026" title="From problems to possibilities." description="Operating ventures, recognised innovations and products still taking shape. Each has its own stage and story." /><div className="project-grid">{projects.map((item, index) => <div key={item.name} id={item.name.toLowerCase()} className="project-detail"><Project item={item} index={index} /><p className="muted detail-copy">{item.detail}</p><p className="tags">{item.tags}</p></div>)}</div><section className="section"><Heading label="THE WORKBENCH" title="Other projects & explorations" description="Client websites and early product work. These entries are not claims of active deployments or fully shipped products." /><div className="workbench">{[['Guestz', 'Hotel management prototype'], ['ZECLAIM', 'Early product exploration'], ['Class Flow', 'Early product exploration'], ['AccountMe', 'Early product exploration'], ['King Mozy Tours and Travels', 'Travel website'], ['Bash Tours and Travels', 'Travel website'], ['Tripoint Management Consult', 'Consulting website'], ['St. Basil Palliative Homecare', 'Healthcare information website']].map(([name, description]) => <article key={name}><h3>{name}</h3><p className="muted">{description}</p><span>Project archive</span></article>)}</div></section></div>;
}
function Skills() {
  return <section className="section" id="skills"><Heading label="MY TOOLKIT" title="Tools with a purpose." description="Technologies I use and areas I’m continuing to develop." /><div className="skills-grid">{[['Web development', 'HTML · CSS · JavaScript · React · Tailwind CSS'], ['Backend & data', 'Python · Django · PostgreSQL'], ['Networks & infrastructure', 'MikroTik · Wi-Fi hotspots · Network setup'], ['Design & workflow', 'Figma · UI/UX · Git · GitHub · Vercel'], ['Growing interests', 'Cybersecurity · Digital rights · Automation']].map(([title, description]) => <article key={title}><h3>{title}</h3><p className="muted">{description}</p></article>)}</div></section>;
}
function About() {
  return <div className="wrap page"><Heading label="ABOUT ME" title="Curiosity turned into practice." /><div className="about-layout"><img src="/media/speaking.jpg" alt="Jonathan presenting an idea" /><div><p className="large-copy">I’m Opakrwoth Jonathan — also known as Opaki. A developer, entrepreneur and second-year IT student in Uganda.</p><p className="muted">At Mbarara University of Science and Technology, I’m developing a foundation in IT while applying it through software, networking, design and entrepreneurship.</p><p className="muted">What began as curiosity about programming has grown into leading DIRI, co-running Z-SPOT, participating in innovation and commercialisation programmes, and joining the Millennium Fellowship Class of 2026.</p><p className="muted">I’m interested in digital rights, cybersecurity and useful tools for small businesses. I want to keep building products that make technology work better for people.</p><Link className="button primary" to="/contact">Let’s connect ↗</Link></div></div><Skills /><section className="section"><Heading label="THE JOURNEY" title="Learning by doing." /><div className="timeline">{[['The foundation', 'Exploring technology', 'Learning programming, design and the building blocks of web applications.'], ['Into practice', 'Software meets infrastructure', 'Building websites and prototypes, then applying networking skills through Z-SPOT.'], ['July 2026', 'DIRI at UYIGF', 'A team win for our digital-rights innovation.'], ['2026', 'Leadership & creative work', 'Millennium Fellowship Class of 2026 and a World Tourism Day poster competition win.'], ['Now', 'Building the next chapter', 'Growing as an IT student and founder, with research, practical business experience and a developing product pipeline.']].map(([date, title, description]) => <article key={title}><span className="eyebrow">{date}</span><div><h3>{title}</h3><p className="muted">{description}</p></div></article>)}</div></section></div>;
}
function Experience() {
  return <div className="wrap page"><Heading label="EXPERIENCE" title="Where I put ideas to work." description="Hands-on experience across business, technology and social impact." /><div className="experience-list">{[['Z-SPOT', 'Business & networking', 'Co-running a Wi-Fi business across four service locations, bringing together networking, service delivery and practical entrepreneurship.'], ['DIRI', 'Innovation leadership', 'Leading a digital-rights innovation through research, technical development, team collaboration and public pitching.'], ['Zhed Labs', 'Software & design', 'Building a studio around websites, business systems, design and automation.'], ['MAGMA', 'Ongoing project', 'Part of my developing product portfolio; a detailed account of the work will follow.']].map(([name, role, description], index) => <article key={name}><span className="eyebrow">0{index + 1}</span><h2>{name}</h2><div><h3>{role}</h3><p className="muted">{description}</p></div></article>)}</div><section className="section"><Heading label="LEADERSHIP & COMMUNITIES" title="Better work starts with people." /><div className="skills-grid">{[['Millennium Fellowship', 'Class of 2026. Developing leadership and a commitment to social impact alongside a global community.'], ['IEEE & technology communities', 'Learning and connecting through technical communities and shared interests.'], ['Hackathons & innovation', 'Collaborating with teams, pitching ideas and taking part in innovation and commercialisation programmes.']].map(([title, description]) => <article key={title}><h3>{title}</h3><p className="muted">{description}</p></article>)}</div></section></div>;
}
function Achievements() {
  return <div className="wrap page"><Heading label="RECOGNITION" title="Milestones that mean something." description="Team achievements, creative work and opportunities to grow." /><div className="award-grid">{[['uyigf-team', '01 / TEAM WIN', 'UYIGF 2026', 'DIRI / Netizens winning team at the Uganda Youth Internet Governance Forum, July 2026.'], ['citt-award', '02 / PRODUCT DEVELOPMENT', 'CITT grant award', 'DIRI received a Product Development Grant Award from the Centre for Innovations and Technology Transfer at MUST.'], ['tourism-award', '03 / DESIGN WIN', 'World Tourism Day 2026', 'Winner of the World Tourism Day 2026 poster competition, as recorded on the award.'], [null, '04 / LEADERSHIP', 'Millennium Fellowship', 'Selected for the Class of 2026, continuing my journey in leadership and social impact.']].map(([image, label, title, description]) => <article key={title}>{image ? <a href={`/media/${image}.jpg`} target="_blank" rel="noreferrer" aria-label={`View ${title} photo`}><img src={`/media/${image}.jpg`} alt={title} loading="lazy" /></a> : <div className="fellowship-art"><span>CLASS OF</span><strong>2026</strong><span>MILLENNIUM FELLOWSHIP</span></div>}<div className="award-copy"><p className="eyebrow">{label}</p><h3>{title}</h3><p className="muted">{description}</p></div></article>)}</div></div>;
}
function Gallery() {
  const [filter, setFilter] = useState('All');
  return <div className="wrap page"><Heading label="THE GALLERY" title="The work. The people. The moments." description="Design, milestones and a little of life beyond the screen. Open a photograph to see it in full." /><div className="filters" aria-label="Filter gallery">{['All', 'Design', 'Milestones', 'Community', 'Life'].map(category => <button key={category} aria-pressed={filter === category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div><div className="gallery-grid">{gallery.filter(item => filter === 'All' || item[3] === filter).map(([image, title, caption, category]) => <figure key={image}><a href={`/media/${image}.jpg`} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}><img src={`/media/${image}.jpg`} alt={title} loading="lazy" /></a><figcaption><span className="eyebrow">{category}</span><h3>{title}</h3><p className="muted">{caption}</p></figcaption></figure>)}</div>{(filter === 'All' || filter === 'Community') && <section className="video-section"><div><p className="eyebrow">A MOMENT ON STAGE</p><h3>World Tourism Day conference</h3><p className="muted">A short clip from the tourism conference stage, shared alongside the poster and award photographs.</p></div><video controls muted playsInline preload="none" poster="/media/tourism-award.jpg" aria-label="World Tourism Day conference stage clip"><source src="/media/tourism-conference.mp4" type="video/mp4" />Your browser does not support video. <a href="/media/tourism-conference.mp4">Download the clip</a>.</video></section>}</div>;
}
function Contact() {
  return <div className="wrap page contact-page"><p className="eyebrow">LET’S TALK</p><h1>Have something<br /><em>worth building?</em></h1><p className="large-copy">I’d love to hear about thoughtful projects, collaborations and opportunities to learn.</p><a className="contact-email" href="mailto:jonathanopaki@gmail.com">jonathanopaki@gmail.com ↗</a><div className="contact-links"><a href="https://github.com/opaki25" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/opakrwoth-jonathan" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:jonathanopaki@gmail.com">Email ↗</a></div><p className="muted">Based in Uganda · Open to conversations worldwide.</p></div>;
}
function Shell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    document.title = `Opaki Jonathan | ${location.pathname === '/' ? 'Developer & Founder' : location.pathname.slice(1).replace(/^./, c => c.toUpperCase())}`;
    if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());else window.scrollTo(0, 0);
  }, [location]);
  return <div className="portfolio"><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="wrap nav-inner"><Link className="brand" to="/">opaki<span>↗</span><small>JONATHAN</small></Link><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button><nav id="main-nav" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">{navigation.map(([url, title]) => <NavLink key={url} to={url}>{title}</NavLink>)}<NavLink to="/contact" className="nav-contact">Let’s talk ↗</NavLink></nav></div></header><main id="main"><Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<Projects />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/startups" element={<Experience />} /><Route path="/skills" element={<div className="wrap page"><Skills /></div>} /><Route path="/achievements" element={<Achievements />} /><Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<div className="wrap page"><Heading label="404" title="This page has moved." /><Link className="button primary" to="/">Back to home →</Link></div>} /></Routes></main><footer className="wrap footer"><div className="footer-top"><p>Good things start<br />with a conversation.</p><Link className="text-link" to="/contact">Let’s make something useful ↗</Link></div><div className="footer-bottom"><Link className="brand" to="/">opaki<span>↗</span></Link><span>© {new Date().getFullYear()} Opaki Jonathan</span><div><Link to="/skills">Toolkit</Link><a href="https://github.com/opaki25" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:jonathanopaki@gmail.com">Email ↗</a></div></div></footer></div>;
}
export default function App() {
  return <BrowserRouter><Shell /></BrowserRouter>;
}
