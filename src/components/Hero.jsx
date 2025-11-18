import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

// Tiny inline robot illustration as a graceful fallback when no Spline scene is provided
function RobotFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 400 400"
        className="w-[520px] h-[520px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      >
        <defs>
          <linearGradient id="body" x1="0" x2="1">
            <stop offset="0%" stopColor="#DED3C3" />
            <stop offset="100%" stopColor="#C7B9A5" />
          </linearGradient>
          <linearGradient id="accent" x1="0" x2="1">
            <stop offset="0%" stopColor="#7A9E9F" />
            <stop offset="100%" stopColor="#5F8788" />
          </linearGradient>
        </defs>
        <rect x="60" y="110" width="280" height="210" rx="26" fill="url(#body)" stroke="#332E29" strokeWidth="4" />
        <rect x="150" y="60" width="100" height="60" rx="18" fill="#C4B49E" stroke="#332E29" strokeWidth="4" />
        <circle cx="200" cy="55" r="10" fill="#E07A5F" stroke="#332E29" strokeWidth="4" />
        <rect x="100" y="150" width="200" height="90" rx="18" fill="#FFF7EA" stroke="#332E29" strokeWidth="4" />
        <circle cx="155" cy="195" r="16" fill="#1F2937" />
        <circle cx="245" cy="195" r="16" fill="#1F2937" />
        <rect x="185" y="225" width="30" height="6" rx="3" fill="#E07A5F" />
        <rect x="75" y="180" width="20" height="70" rx="8" fill="url(#accent)" stroke="#332E29" strokeWidth="4" />
        <rect x="305" y="180" width="20" height="70" rx="8" fill="url(#accent)" stroke="#332E29" strokeWidth="4" />
        <rect x="150" y="320" width="100" height="18" rx="9" fill="#7A9E9F" stroke="#332E29" strokeWidth="4" />
      </motion.svg>
    </div>
  );
}

export default function Hero() {
  const scene = import.meta.env.VITE_SPLINE_SCENE;

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      {/* Vintage paper + vignette base */}
      <div className="absolute inset-0 bg-[#0f0e0a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,22,18,0)_0%,rgba(24,22,18,0.4)_60%,rgba(24,22,18,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.5\\'/></svg>')" }} />

      {/* 3D robot (simplified) or fallback illustration */}
      <div className="absolute inset-0">
        {scene ? (
          <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
        ) : (
          <RobotFallback />
        )}
      </div>

      {/* Warm overlays for semi-vintage tone */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f0e0a]/20 via-[#0f0e0a]/30 to-[#0f0e0a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,122,95,0.18),transparent_40%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl pt-24"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-[#F6F1E9] drop-shadow-[0_10px_40px_rgba(224,122,95,0.25)]">
            A Cozy, Cartoon Robot Community
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#E9E1D2]/90">
            Semi‑vintage vibes, playful chats, and a friendly robot mascot at the heart of our server. Game, create, and chill together.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://discord.com/invite/example"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#7A9E9F] hover:bg-[#6b8f90] text-[#171412] px-6 py-3 text-base font-semibold shadow-lg shadow-black/20 transition"
            >
              Join the Server
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-2xl bg-[#F6F1E9]/10 hover:bg-[#F6F1E9]/15 text-[#F6F1E9] px-6 py-3 text-base font-medium border border-[#F6F1E9]/20 backdrop-blur-md transition"
            >
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center">
            <div className="rounded-xl bg-[#F6F1E9]/5 border border-[#F6F1E9]/15 p-3">
              <p className="text-2xl font-bold text-[#F6F1E9]">5k+</p>
              <p className="text-xs text-[#E9E1D2]/90">Members</p>
            </div>
            <div className="rounded-xl bg-[#F6F1E9]/5 border border-[#F6F1E9]/15 p-3">
              <p className="text-2xl font-bold text-[#F6F1E9]">120</p>
              <p className="text-xs text-[#E9E1D2]/90">Active VC</p>
            </div>
            <div className="rounded-xl bg-[#F6F1E9]/5 border border-[#F6F1E9]/15 p-3">
              <p className="text-2xl font-bold text-[#F6F1E9]">24/7</p>
              <p className="text-xs text-[#E9E1D2]/90">Moderation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
