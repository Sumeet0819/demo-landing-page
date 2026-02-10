import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const faqs = [
  { q: "How do I book a tee time?", a: "You can book a tee time directly through our website or by calling our pro shop. Members have priority booking access 14 days in advance." },
  { q: "Do I need to be a member to play?", a: "While we offer exclusive membership benefits, our course is open to the public on weekdays and select weekend slots." },
  { q: "What's the dress code?", a: "We maintain a traditional golf atmosphere. Collared shirts and soft-spiked golf shoes are required. Denim and athletic wear are not permitted on the course." },
  { q: "Do you host private events or tournaments?", a: "Yes, we specialize in corporate outings, charity tournaments, and weddings. Please contact our events team for a personalized proposal." }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggle = (i) => {
        if (activeIndex === i) {
            // Close active
            gsap.to(contentRefs.current[i], { height: 0, opacity: 0, marginTop: 0, duration: 0.4, ease: "power2.in" });
            setActiveIndex(null);
        } else {
            // Close previous if exists
            if (activeIndex !== null) {
                gsap.to(contentRefs.current[activeIndex], { height: 0, opacity: 0, marginTop: 0, duration: 0.3, ease: "power2.in" });
            }
            // Open new
            setActiveIndex(i);
            const el = contentRefs.current[i];
            gsap.fromTo(el, 
                { height: 0, opacity: 0, marginTop: 0 },
                { height: 'auto', opacity: 1, marginTop: 16, duration: 0.5, ease: "power2.out" }
            );
        }
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-[800px]">
                <div className="text-center mb-16">
                    <span className="text-primary-light text-sm font-bold tracking-[0.2em] uppercase block mb-4">Support</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-secondary">
                        Frequently Asked <span className="italic text-primary font-light">Questions</span>
                    </h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-secondary/10 rounded-2xl px-8 py-2 bg-white transition-all hover:border-primary/20 hover:shadow-sm">
                            <button 
                                onClick={() => toggle(i)}
                                className="flex justify-between items-center w-full py-4 text-left group focus:outline-none"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors ${activeIndex === i ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                                    {faq.q}
                                </span>
                                <span className={`w-8 h-8 flex items-center justify-center rounded-full border border-secondary/20 transition-all duration-300 ml-4 ${activeIndex === i ? 'rotate-45 bg-primary text-white border-primary' : 'text-secondary/40 group-hover:border-primary/50'}`}>
                                    +
                                </span>
                            </button>
                            <div 
                                ref={el => contentRefs.current[i] = el}
                                className="overflow-hidden h-0 opacity-0"
                            >
                                <p className="text-secondary/70 font-light leading-relaxed pb-6 text-base md:text-lg">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
