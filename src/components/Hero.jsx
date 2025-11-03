import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil for readability - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-violet-400" />
          <span className="text-sm text-violet-200/90">Portfolio Journey</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Crafting Futures in Code & Design
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          A dark, futuristic voyage through my work — blending interaction, motion, and clean engineering.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            View Projects
          </a>
          <button
            onClick={handleScroll}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Explore the Story
          </button>
        </div>
        <button
          onClick={handleScroll}
          aria-label="Scroll down"
          className="absolute bottom-8 inline-flex animate-bounce items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur transition hover:bg-white/10"
        >
          <ArrowDown className="h-4 w-4" />
          <span className="text-xs">Scroll</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
