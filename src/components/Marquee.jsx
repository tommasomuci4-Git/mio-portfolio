const items = [
  {
    name: 'Sogno Salento',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    useImg: false,
    emoji: '🌊',
  },
  {
    name: 'OrigineResell',
    useImg: false,
    emoji: '🏷️',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    useImg: true,
  },
  {
    name: 'Vercel',
    useImg: false,
    emoji: '▲',
  },
  {
    name: 'Claude AI',
    useImg: false,
    emoji: '✦',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    useImg: true,
  },
  {
    name: 'HTML / CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    useImg: true,
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    useImg: true,
  },
]

function Item({ name, icon, useImg, emoji }) {
  return (
    <div className="flex items-center gap-2.5 px-6">
      <span className="flex items-center justify-center w-5 h-5 opacity-50">
        {useImg ? (
          <img
            src={icon}
            alt={name}
            className="w-4 h-4 object-contain dark:invert"
            loading="lazy"
          />
        ) : (
          <span className="text-sm leading-none">{emoji}</span>
        )}
      </span>
      <span className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#fafafa] dark:from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#fafafa] dark:from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="flex" style={{ animation: 'marquee 30s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  )
}
