import React, { useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import menuData from '../data/menu.json'

// --- Custom SVG Pattern matching the elegant menu design ---
const MenuPattern = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <g transform="translate(50,50)">
      {/* 8 pointed geometric flower */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <path key={i} transform={`rotate(${angle})`} d="M 0 0 L 25 -12 L 50 0 L 25 12 Z" strokeLinejoin="round" />
      ))}
      {/* Inner geometric core */}
      {[0, 90, 180, 270].map((angle, i) => (
        <path key={`inner-${i}`} transform={`rotate(${angle})`} d="M 0 0 L 15 -15 L 30 0 L 15 15 Z" strokeLinejoin="round" />
      ))}
    </g>
  </svg>
)

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page bg-[#e7e8d9] p-6 md:p-10 border border-black/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] relative flex flex-col overflow-hidden" ref={ref} data-density="soft">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.04] text-[#3a2e22] flex flex-col justify-between overflow-hidden">
        <MenuPattern className="w-64 h-64 absolute -top-16 -left-16" />
        <MenuPattern className="w-64 h-64 absolute top-1/2 -translate-y-1/2 -right-16" />
        <MenuPattern className="w-64 h-64 absolute -bottom-16 -left-16" />
      </div>

      <div className="page-content flex-grow flex flex-col overflow-hidden relative z-10">
        {props.children}
      </div>
      <div className="absolute bottom-4 left-0 w-full text-center text-[10px] font-semibold tracking-widest text-[#58705e] z-10">
        - {props.number} -
      </div>
      
      {/* Binding shadow effect depending on left or right page */}
      {props.number % 2 === 0 ? (
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-20" />
      ) : (
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-20" />
      )}
    </div>
  )
})

export default function FlipBookMenu() {
  const [pages, setPages] = useState([])
  
  useEffect(() => {
    const itemsPerPage = 6;
    const computedPages = [];
    let currentPage = { titles: [], items: [] };
  
    menuData.forEach(category => {
      // Check if we need a new page before adding category
      if (currentPage.items.length > 0 && currentPage.items.length + category.items.length > itemsPerPage + 2) {
        computedPages.push(currentPage);
        currentPage = { titles: [category.category], items: [] };
      } else {
        if (!currentPage.titles.includes(category.category)) {
          currentPage.titles.push(category.category);
        }
      }
  
      category.items.forEach(item => {
        if (currentPage.items.length >= itemsPerPage) {
          computedPages.push(currentPage);
          currentPage = { titles: [category.category + ' (Cont.)'], items: [] };
        }
        currentPage.items.push({...item, parentCategory: category.category});
      });
    });
    
    if (currentPage.items.length > 0) {
      computedPages.push(currentPage);
    }
    
    // Ensure even number of pages for the book to close properly
    if (computedPages.length % 2 !== 0) {
      computedPages.push({ titles: ['Notes'], items: [] });
    }
    
    setPages(computedPages);
  }, []);

  return (
    <section id="flip-menu" className="py-24 md:py-36 px-4 bg-[#0a0f0d] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#58705e] mb-4">Discover</p>
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.1] text-white">
          Our Complete Menu
        </h2>
        <p className="text-white/50 mt-4 text-sm tracking-wide">Drag the pages to flip through</p>
      </div>

      <div className="w-full max-w-[1000px] flex justify-center perspective-1000">
        {pages.length > 0 && (
          <HTMLFlipBook 
            width={400} 
            height={600} 
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            className="shadow-2xl"
          >
            {/* Front Cover / Inside Left */}
            <div className="page bg-[#1b3026] text-[#e7e8d9] flex flex-col items-center justify-center border-r-8 border-black/40 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.2)] overflow-hidden relative">
               <MenuPattern className="w-[120%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-[#e7e8d9] pointer-events-none" />
               <div className="relative z-10 flex flex-col items-center">
                 <h1 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-4 text-center px-4 leading-tight">House of Mori</h1>
                 <p className="text-sm font-semibold tracking-[0.3em] uppercase text-[#e7e8d9]/60">Menu</p>
                 <MenuPattern className="w-16 h-16 mt-12 text-[#e7e8d9]/40" />
               </div>
            </div>
            
            {/* Inside Pages */}
            {pages.map((page, i) => (
              <Page key={i} number={i + 1}>
                {page.titles.map((title, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-[#3a2e22] mt-2 mb-4 border-b border-black/10 pb-2">
                      {title}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {page.items.filter(item => item.parentCategory === title || item.parentCategory === title.replace(' (Cont.)', '')).map((item, j) => (
                        <div key={j} className="flex flex-col">
                          <div className="flex justify-between items-baseline gap-2">
                            <span className="text-[13px] md:text-[15px] font-bold text-[#1a1a1a] leading-tight pr-1 bg-[#e7e8d9] relative z-10">{item.name}</span>
                            <span className="border-b-[1.5px] border-dotted border-[#3a2e22]/30 flex-grow mx-1 relative top-[-6px]"></span>
                            <span className="text-[13px] md:text-[15px] font-bold text-[#3a2e22] whitespace-nowrap pl-1 bg-[#e7e8d9] relative z-10">{item.price}</span>
                          </div>
                          {item.type && (
                            <span className="text-[10px] md:text-[11px] font-medium text-[#58705e] mt-0.5">{item.type}</span>
                          )}
                          {item.description && (
                            <p className="text-[10px] md:text-[11px] text-black/65 leading-[1.3] mt-1 font-medium max-w-[90%]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Page>
            ))}
            
            {/* Back Cover / Inside Right */}
            <div className="page bg-[#1b3026] text-[#e7e8d9] flex flex-col items-center justify-center border-l-8 border-black/40 shadow-[inset_10px_0_20px_rgba(0,0,0,0.2)] overflow-hidden relative">
               <MenuPattern className="w-[120%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-[#e7e8d9] pointer-events-none" />
               <div className="relative z-10 flex flex-col items-center">
                 <div className="w-16 h-16 border border-[#e7e8d9]/30 rounded-full flex items-center justify-center mb-6">
                   <span className="text-xl font-light tracking-widest">HOM</span>
                 </div>
                 <p className="text-xs tracking-[0.2em] uppercase text-[#e7e8d9]/60">Silvassa</p>
               </div>
            </div>
          </HTMLFlipBook>
        )}
      </div>
    </section>
  )
}
