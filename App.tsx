import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Engineering } from '@/components/Engineering';
import { SmartCity } from '@/components/SmartCity';
import { Environment } from '@/components/Environment';
import { Projects } from '@/components/Projects';
import { References } from '@/components/References';
import { Partnerships } from '@/components/Partnerships';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-liquid-abyss text-silver-mist">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Engineering />
        <SmartCity />
        <Environment />
        <Projects />
        <References />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
