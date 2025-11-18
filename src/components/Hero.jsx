import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_40%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl pt-24"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_8px_40px_rgba(99,102,241,0.45)]">
            Your Anime-Gaming Discord, Supercharged
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90">
            Hang out, share fan art, team up for raids, and vibe with a welcoming community. Interactive 3D, playful vibes, and events every week.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://discord.com/invite/example"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-6 py-3 text-base font-medium shadow-lg shadow-indigo-500/20 transition"
            >
              Join the Server
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 text-base font-medium border border-white/10 backdrop-blur-md transition"
            >
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <p className="text-2xl font-bold text-white">5k+</p>
              <p className="text-xs text-slate-300/80">Members</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <p className="text-2xl font-bold text-white">120</p>
              <p className="text-xs text-slate-300/80">Active VC</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs text-slate-300/80">Moderation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
