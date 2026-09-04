import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const menuCategories = [
  {
    title: 'Starters',
    items: [
      { name: 'Wagyu Beef Tataki', desc: 'Ponzu, crispy garlic, micro herbs', price: '$24' },
      { name: 'Truffle Edamame', desc: 'Steamed soybeans, black truffle salt', price: '$12' },
      { name: 'Mori Signature Gyoza', desc: 'Handmade daily, pork & scallion, chili soy', price: '$18' },
      { name: 'Scallop Carpaccio', desc: 'Hokkaido scallops, yuzu dressing, caviar', price: '$28' },
    ]
  },
  {
    title: 'Mains',
    items: [
      { name: 'Miso Glazed Black Cod', desc: 'Sweet miso marinade, pickled ginger shoot', price: '$42' },
      { name: 'A5 Wagyu Striploin', desc: 'Charcoal grilled, seasonal vegetables, wasabi jus', price: '$95' },
      { name: 'Truffle Mushroom Risotto', desc: 'Wild mushrooms, parmesan crisp, white truffle oil', price: '$36' },
      { name: 'Yuzu Butter Lobster', desc: 'Poached lobster tail, yuzu beurre blanc', price: '$65' },
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Matcha Lava Cake', desc: 'Warm matcha center, black sesame ice cream', price: '$16' },
      { name: 'Yuzu Cheesecake', desc: 'Deconstructed, graham crumble, fresh berries', price: '$14' },
      { name: 'Mochi Trio', desc: 'Chef’s daily selection of seasonal flavors', price: '$12' },
    ]
  },
  {
    title: 'Beverages',
    items: [
      { name: 'Kyoto Highball', desc: 'Japanese whisky, sparkling water, yuzu zest', price: '$18' },
      { name: 'Matcha Espresso Fusion', desc: 'Ceremonial matcha, double espresso, oat milk', price: '$9' },
      { name: 'Sencha Green Tea', desc: 'Premium loose leaf, steeped at table', price: '$7' },
    ]
  }
]

export default function FullMenu() {
  const mainRef = useRef(null)
  const lenisRef = useRef(null)

  useGSAP(() => {
    // Page load animations
    gsap.fromTo('.menu-header', 
      { y: 80, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1, duration: 1.2, ease: 'power4.out', delay: 0.1 }
    )

    gsap.fromTo('.menu-desc',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
    )

    // Stagger categories as they scroll in
    gsap.utils.toArray('.menu-category').forEach((category, i) => {
      gsap.fromTo(category,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, { scope: mainRef })

  // --- Lenis smooth scroll ---
  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.075, smoothWheel: true })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <div ref={mainRef} className="overflow-x-hidden w-full bg-[#060806] text-white min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow pt-40 pb-32 px-6 lg:px-14">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24 border-b border-white/10 pb-16">
            <h1 className="menu-header text-[clamp(4rem,8vw,8rem)] font-light leading-[1.05] tracking-[-0.04em]">
              Our Menu
            </h1>
            <p className="menu-desc mt-6 text-sm leading-7 text-white/55 font-light max-w-lg mx-auto uppercase tracking-[0.2em]">
              Seasonal ingredients. Timeless techniques.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-32">
            {menuCategories.map((category, idx) => (
              <section key={idx} className="menu-category">
                <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light tracking-[-0.03em] mb-12 text-[#e8e9da]">
                  {category.title}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group flex flex-col border-b border-white/10 pb-6 hover:border-white/40 transition-colors duration-500">
                      <div className="flex justify-between items-baseline mb-3">
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-[#e8e9da] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-lg font-light text-white/70 tabular-nums">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-white/45 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
