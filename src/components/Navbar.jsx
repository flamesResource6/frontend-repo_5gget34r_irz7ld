import { MessageCircle, Sparkles } from "lucide-react";

function AnimeIcon() {
  return (
    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-400 to-purple-500 shadow-lg overflow-hidden">
      {/* Hair */}
      <div className="absolute -top-2 left-0 right-0 h-6 bg-pink-500/70 rounded-b-[12px]" />
      {/* Face */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-7 h-7 rounded-full bg-amber-100/90 border border-amber-200/70">
          {/* Eyes */}
          <div className="absolute left-1.5 top-3 w-1.5 h-2.5 bg-black/80 rounded-full" />
          <div className="absolute right-1.5 top-3 w-1.5 h-2.5 bg-black/80 rounded-full" />
          {/* Blush */}
          <div className="absolute left-0.5 bottom-1 w-2 h-1 bg-pink-300/60 rounded-full blur-[1px]" />
          <div className="absolute right-0.5 bottom-1 w-2 h-1 bg-pink-300/60 rounded-full blur-[1px]" />
          {/* Mouth */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-2 h-0.5 bg-pink-500 rounded-full" />
        </div>
      </div>
      {/* Sparkle */}
      <Sparkles className="absolute -right-1 -top-1 w-4 h-4 text-white/80" />
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3">
            <AnimeIcon />
            <div>
              <p className="text-white font-semibold leading-5">Anime Arcadia</p>
              <p className="text-xs text-slate-300/70 -mt-0.5">A playful Discord haven</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-200/90">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#community" className="hover:text-white transition">Community</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <a
            href="https://discord.com/invite/example"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <MessageCircle className="w-4 h-4" />
            Join Discord
          </a>
        </div>
      </div>
    </header>
  );
}
