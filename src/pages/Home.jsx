import LogoLoop from '../components/LogoLoop'
import Antigravity from '../components/Antigravity'
import { useMediaQuery } from '../hooks/useMediaQuery'

const logos = [
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <span className="text-sm opacity-60">🌊</span> Sogno Salento
      </span>
    ),
    title: 'Sogno Salento',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <span className="text-sm opacity-60">🏷️</span> OrigineResell
      </span>
    ),
    title: 'OrigineResell',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 object-contain dark:invert opacity-50" loading="lazy" />
        GitHub
      </span>
    ),
    title: 'GitHub',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <span className="text-sm opacity-60">▲</span> Vercel
      </span>
    ),
    title: 'Vercel',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <span className="text-sm opacity-60">✦</span> Claude AI
      </span>
    ),
    title: 'Claude AI',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="w-4 h-4 object-contain opacity-50" loading="lazy" />
        VS Code
      </span>
    ),
    title: 'VS Code',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4 object-contain opacity-50" loading="lazy" />
        HTML / CSS
      </span>
    ),
    title: 'HTML / CSS',
  },
  {
    node: (
      <span className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4 object-contain opacity-50" loading="lazy" />
        JavaScript
      </span>
    ),
    title: 'JavaScript',
  },
]

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <main className="h-screen flex flex-col items-center justify-center px-6 select-none overflow-hidden relative">

      {/* Background — desktop only */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Antigravity
            count={200}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color={'#a855f7'}
            autoAnimate={true}
            particleVariance={1}
          />
        </div>
      )}

      {/* Content above canvas */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Avatar + badge */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 mb-4">
            <img
              src="/avatar.jpg"
              alt="Tommaso Muci"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-[clamp(3rem,10vw,8rem)] text-neutral-900 dark:text-neutral-100 text-center leading-none tracking-tight mb-4">
          Tommaso Muci
        </h1>

        {/* Subtitle */}
        <p className="text-xs font-mono tracking-widest text-center">
          <span className="text-neutral-500 dark:text-neutral-400">Digital builder</span>
          <span className="text-neutral-300 dark:text-neutral-700 mx-2">·</span>
          <span className="text-neutral-300 dark:text-neutral-600">from Salento, IT</span>
        </p>

      </div>

      {/* LogoLoop strip */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <LogoLoop
          logos={logos}
          speed={60}
          direction="left"
          logoHeight={20}
          gap={40}
          hoverSpeed={0}
          fadeOut
        />
      </div>

    </main>
  )
}
