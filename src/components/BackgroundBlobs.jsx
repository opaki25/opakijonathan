import { useTheme } from '../context/ThemeContext'

const BackgroundBlobs = () => {
  const { isDark } = useTheme()
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary blob - cyan */}
      <div 
        className={`
          absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full
          ${isDark ? 'bg-cyan-500/[0.12]' : 'bg-cyan-400/[0.25]'}
          blur-[120px] animate-blob
        `}
      />
      
      {/* Secondary blob - purple */}
      <div 
        className={`
          absolute top-1/2 -left-40 w-[550px] h-[550px] rounded-full
          ${isDark ? 'bg-purple-500/[0.12]' : 'bg-purple-400/[0.22]'}
          blur-[120px] animate-blob animation-delay-2000
        `}
        style={{ animationDelay: '2s' }}
      />
      
      {/* Tertiary blob - indigo */}
      <div 
        className={`
          absolute -bottom-40 right-1/4 w-[450px] h-[450px] rounded-full
          ${isDark ? 'bg-indigo-500/[0.10]' : 'bg-indigo-400/[0.18]'}
          blur-[100px] animate-blob
        `}
        style={{ animationDelay: '4s' }}
      />
      
      {/* Quaternary blob - blue */}
      <div 
        className={`
          absolute top-1/4 left-1/3 w-[350px] h-[350px] rounded-full
          ${isDark ? 'bg-blue-500/[0.08]' : 'bg-blue-400/[0.15]'}
          blur-[80px] animate-blob
        `}
        style={{ animationDelay: '6s' }}
      />
      
      {/* Subtle accent blob */}
      <div 
        className={`
          absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full
          ${isDark ? 'bg-teal-500/[0.06]' : 'bg-teal-400/[0.12]'}
          blur-[70px] animate-blob
        `}
        style={{ animationDelay: '8s' }}
      />
      
      {/* Grid overlay for depth - more subtle */}
      <div 
        className={`
          absolute inset-0 
          ${isDark 
            ? 'bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'
          }
          bg-[size:60px_60px]
        `}
      />
    </div>
  )
}

export default BackgroundBlobs
