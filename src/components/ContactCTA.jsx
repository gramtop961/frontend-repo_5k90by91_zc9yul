import React from 'react';
import { Send, Mail, Linkedin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-black to-[#0a0a0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <Send className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-200/90">Let’s collaborate</span>
        </div>
        <h2 className="mt-6 text-balance text-3xl font-bold sm:text-4xl">
          Ready to bring your next idea to life?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          I design and engineer interactive experiences with thoughtful motion and meticulous detail. Drop a message and let’s build something remarkable.
        </p>
        <div className="mx-auto mt-8 flex w-full flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
};

export default ContactCTA;
