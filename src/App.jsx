import React from 'react';
import Hero from './components/Hero';
import StoryScroll from './components/StoryScroll';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-wide text-white/90">
            <span className="text-violet-400">&lt;/&gt;</span> My Portfolio
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#story" className="hover:text-white">Story</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <StoryScroll />
        <Projects />
        <ContactCTA />
      </main>
    </div>
  );
};

export default App;
