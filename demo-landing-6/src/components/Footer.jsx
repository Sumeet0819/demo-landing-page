import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#030d07] px-6 lg:px-14 py-16 border-t border-white/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <Link to="/" className="font-bold text-2xl tracking-tight">HOM.</Link>
          <p className="mt-3 text-xs leading-5 text-white/35 max-w-xs">
            House of Mori — A culinary experience crafted for those who seek more than a meal.
          </p>
        </div>
        <nav className="flex gap-14 text-sm text-white/50">
          <div className="flex flex-col gap-3">
            <Link to="/#about" className="hover:text-white transition-colors">About</Link>
            <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
            <Link to="/#gallery" className="hover:text-white transition-colors">Gallery</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/#findus" className="hover:text-white transition-colors">Find Us</Link>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
        <p>Copyright © 2026 HOUSE of Mori. All rights reserved.</p>
        <p>Est. 1999 — Nevada, USA</p>
      </div>
    </footer>
  )
}
