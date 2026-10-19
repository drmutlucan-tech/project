import { Navbar } from '@/components/Navbar.tsx';
import { Hero } from '@/components/Hero.tsx';
import { Services } from '@/components/Services.tsx';
import { Stats } from '@/components/Stats.tsx';
import { About } from '@/components/About.tsx';
import { Engineering } from '@/components/Engineering.tsx';
import { SmartCity } from '@/components/SmartCity.tsx';
import { Environment } from '@/components/Environment.tsx';
import { Projects } from '@/components/Projects.tsx';
import { References } from '@/components/References.tsx';
import { Partnerships } from '@/components/Partnerships.tsx';
import { Contact } from '@/components/Contact.tsx';
import { Footer } from '@/components/Footer.tsx';
import { LegalLayer } from '@/components/LegalLayer';

export default function App() {
  return (
    <LegalLayer>
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
    </LegalLayer>
  );
}
