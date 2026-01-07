import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialLinks />
      
      <main className="max-w-6xl mx-auto">
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Education />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
