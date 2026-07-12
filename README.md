# OPAKI | IT Specialist Portfolio

A modern, responsive personal portfolio website with a stunning liquid glass / glassmorphism design.

![Portfolio Preview](public/preview.png)

## Features

- **Glassmorphism Design**: Beautiful frosted glass UI with backdrop blur effects
- **Dark/Light Theme**: Elegant theme toggle with smooth transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for buttery smooth transitions
- **Markdown Blog**: Built-in blog system with markdown rendering
- **3D Glass Cards**: Interactive tilt effects on project cards
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Markdown** - Blog rendering
- **React Icons** - Icon library

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/opaki25/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173)

### Build for Production

\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
opakijonathan/
├── public/
│   ├── cv.pdf            # Downloadable CV
│   ├── favicon.svg       # Site favicon
│   └── projects/         # Project images
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── GlassCard.jsx
│   │   ├── GlassButton.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── sections/         # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── context/          # React context providers
│   │   └── ThemeContext.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment config
\`\`\`

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/opaki25/portfolio)

### Manual Deployment

\`\`\`bash
# Build the project
npm run build

# Preview production build
npm run preview
\`\`\`

Upload the \`dist\` folder to any static hosting service.

## Customization

### Update Personal Info

Edit the relevant section files in \`src/sections/\` to update:
- Name and title
- Contact information
- Social links
- Skills and projects
- Blog posts

### Theme Colors

Modify \`tailwind.config.js\` to change the color palette:

\`\`\`js
colors: {
  neon: {
    blue: '#00d4ff',
    purple: '#a855f7',
    cyan: '#22d3ee',
  },
}
\`\`\`

### Glass Effect

Adjust glass properties in \`src/index.css\`:

\`\`\`css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
\`\`\`

## Author

**Opakrwoth Jonathan**
- GitHub: [@opaki25](https://github.com/opaki25)
- LinkedIn: [Opakrwoth Jonathan](https://linkedin.com/in/opakrwoth-jonathan)
- Email: jonathanopaki@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with passion in Uganda 🇺🇬
