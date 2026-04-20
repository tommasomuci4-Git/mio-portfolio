export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center">
        <p className="text-neutral-500 dark:text-neutral-400 mb-2">Ciao, sono</p>
        <h1 className="font-heading font-bold text-5xl md:text-7xl text-neutral-900 dark:text-neutral-100 mb-4">
          Tommaso Muci.
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">
          Builder digitale
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#contatti" className="px-6 py-3 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity">
            Contattami
          </a>
          <a href="#chi-sono" className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors">
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  )
}
