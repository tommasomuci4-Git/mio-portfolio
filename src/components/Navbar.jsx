import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location])

  const linkClass = (path) =>
    `text-xs tracking-widest uppercase transition-colors duration-200 ${
      location.pathname === path
        ? 'text-neutral-900 dark:text-neutral-100'
        : 'text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop */}
      <nav className="hidden md:flex items-center justify-between px-10 h-16" aria-label="Main navigation">
        <Link to="/about" className={linkClass('/about')}>About</Link>
        <Link to="/works" className={linkClass('/works')}>Works</Link>

        <Link
          to="/"
          className="font-heading text-base text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity"
        >
          Tommaso Muci
        </Link>

        <Link to="/skills" className={linkClass('/skills')}>Skills</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden flex items-center justify-between px-6 h-16" aria-label="Mobile navigation">
        <Link to="/" className="font-heading text-sm text-neutral-900 dark:text-neutral-100">
          Tommaso Muci
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="text-neutral-400 dark:text-neutral-600"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#fafafa] dark:bg-[#0a0a0a] border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 flex flex-col gap-5">
          <Link to="/about" className="text-sm text-neutral-600 dark:text-neutral-400">About</Link>
          <Link to="/works" className="text-sm text-neutral-600 dark:text-neutral-400">Works</Link>
          <Link to="/skills" className="text-sm text-neutral-600 dark:text-neutral-400">Skills</Link>
          <Link to="/contact" className="text-sm text-neutral-600 dark:text-neutral-400">Contact</Link>
        </div>
      )}
    </header>
  )
}
