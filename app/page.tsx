import About from '@/components/About';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen bg-lighter dark:bg-darker p-2 pt-4">
      <div className="container mx-auto">
        <Header />
        <About />
        <Skills />
      </div>
    </div>
  );
}