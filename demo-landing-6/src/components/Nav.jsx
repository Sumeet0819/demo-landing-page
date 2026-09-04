import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-6 py-3.5 rounded-full w-[92%] max-w-5xl transition-all duration-500 ${
        navScrolled
          ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl'
          : 'bg-white/5 backdrop-blur-sm border border-white/10'
      }`}
    >
      <Link to="/" className="font-bold text-lg tracking-tight">HOM.</Link>
      <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/75">
        <Link to="/#about" className="hover:text-white transition-colors duration-200">About</Link>
        <Link to="/menu" className="hover:text-white transition-colors duration-200">Menu</Link>
        <Link to="/#gallery" className="hover:text-white transition-colors duration-200">Gallery</Link>
        <Link to="/#findus" className="hover:text-white transition-colors duration-200">Find Us</Link>
      </div>
      <button
        type="button"
        className="bg-white text-[#060806] text-sm font-semibold px-6 py-2 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200"
      >
        Reserve
      </button>
    </nav>
  )
}
