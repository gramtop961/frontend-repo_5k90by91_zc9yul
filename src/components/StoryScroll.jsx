import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Cpu, Palette, Code2 } from 'lucide-react';

const Chapter = ({ icon: Icon, title, text, index }: { icon: any; title: string; text: string; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-200/90">
          <Icon className="h-4 w-4 text-violet-300" />
          Chapter {index + 1}
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/80">{text}</p>
      </motion.div>
    </div>
  );
};

const StoryScroll = () => {
  const chapters = [
    {
      icon: Sparkles,
      title: 'Curiosity Sparks',
      text:
        'It began with playful experiments — turning ideas into interactive pixels and falling in love with motion.',
    },
    {
      icon: Cpu,
      title: 'Systems Thinking',
      text:
        'From components to architecture, I design experiences that scale — balancing aesthetics with performance.',
    },
    {
      icon: Palette,
      title: 'Crafting Aesthetic UX',
      text:
        'I sweat the details: typography, color, spacing, and micro-interactions that feel alive and intuitive.',
    },
    {
      icon: Code2,
      title: 'Shipping with Quality',
      text:
        'Clean code, accessible interfaces, and thoughtful animations — shipped with care and measured impact.',
    },
  ];

  return (
    <section id="story" className="relative scroll-mt-24 bg-gradient-to-b from-black via-[#0b0613] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-white to-violet-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            A scroll-driven story about how I build
          </h2>
          <p className="mt-3 text-white/75">
            Follow the chapters as they fade in — a small taste of the animation-first mindset behind my work.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {chapters.map((c, i) => (
            <Chapter key={i} icon={c.icon} title={c.title} text={c.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryScroll;
