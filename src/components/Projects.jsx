import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Neon Interfaces',
    description: 'Explorations in glassmorphism, neon accents, and tactile hover states with buttery motion.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Realtime Dashboards',
    description: 'Data visualizations that stream updates smoothly and remain accessible on any device.',
    tags: ['TypeScript', 'WebSockets', 'Accessibility'],
    links: { github: '#', live: '#' },
  },
  {
    title: '3D Interactions',
    description: 'Blending Spline scenes with UI for interactive product tours and immersive hero sections.',
    tags: ['Spline', 'Three.js', 'UX'],
    links: { github: '#', live: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="bg-gradient-to-r from-white to-violet-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Selected Work
          </h2>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-violet-200/90 sm:flex">
            <Sparkles className="h-4 w-4 text-violet-300" /> Motion-forward, high polish
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl transition-opacity group-hover:opacity-80" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.links.github}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.links.live}
                  className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-3 py-2 text-sm text-white transition hover:bg-violet-400"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
