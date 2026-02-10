import useSmoothScroll from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Academy from './sections/Academy';
import Stats from './sections/Stats';
import Course from './sections/Course';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

export default function App() {
  useSmoothScroll();

  return (
    <div className="bg-background min-h-screen text-secondary w-full antialiased">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Academy />
        <Stats />
        <Course />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
