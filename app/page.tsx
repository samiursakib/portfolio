import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="h-full bg-lighter dark:bg-darker pt-4">
      <div className="container mx-auto">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}