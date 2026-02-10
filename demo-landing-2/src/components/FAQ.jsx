import React, { useState, useRef } from 'react';
import Section from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const faqs = [
  {
    question: "Check-in and Check-out times?",
    answer: "Check-in is from 15:00, and check-out is until 12:00. Early check-in and late check-out are available upon request and subject to availability."
  },
  {
    question: "Is breakfast included?",
    answer: "Yes, a continental breakfast with local organic products is included in your stay. Use our app to order specific items."
  },
  {
    question: "Are pets allowed?",
    answer: "We are a pet-friendly resort! Small and medium-sized pets are welcome for a small additional fee to cover cleaning."
  },
  {
    question: "Is there Wi-Fi in the cabins?",
    answer: "Yes, high-speed Starlink Wi-Fi is available in all cabins and common areas, perfect for remote work."
  },
  {
    question: "What activities are available?",
    answer: "We offer hiking trails, bike rentals, fishing gear, and yoga classes. In winter, we have cross-country skiing and snowshoeing."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-none">
            <button 
                className="w-full py-6 flex justify-between items-center text-left hover:text-white/80 transition-colors"
                onClick={onClick}
            >
                <span className="text-lg md:text-xl font-light text-white">{question}</span>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors ${isOpen ? 'bg-white text-neutral-900' : 'text-white'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-neutral-400 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.faq-container', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <Section id="faq" dark>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
            <span className="text-sm font-mono text-neutral-500 block mb-2">(05)</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Common Questions</h2>
            <p className="text-neutral-400 text-sm">Everything you need to know before you book.</p>
        </div>

        <div className="md:col-span-8 faq-container">
            {faqs.map((faq, i) => (
                <FAQItem 
                    key={i}
                    {...faq}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
