import { MessageCircle, Sparkles } from "lucide-react";

function Badge() {
  return (
    <div className="relative w-11 h-11 rounded-full border-2 border-[#2b2520] bg-[#F6F1E9] shadow-[inset_0_2px_0_rgba(255,255,255,0.7),0_6px_20px_rgba(0,0,0,0.35)] overflow-hidden">
      {/* retro rays */}
      <div className="absolute inset-0 opacity-20" style={{ background: "conic-gradient(from 0deg, #E07A5F 0deg, transparent 35deg, #7A9E9F 35deg, transparent 70deg, #C7B9A5 70deg, transparent 105deg, #E07A5F 105deg, transparent 140deg)" }} />
      {/* robot face */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-7 h-7 rounded-[10px] bg-[#C7B9A5] border border-[#2b2520]">
          <div className="absolute left-1.5 top-2 w-1.5 h-2 bg-[#2b2520] rounded" />
          <div className="absolute right-1.5 top-2 w-1.5 h-2 bg-[#2b2520] rounded" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-3 h-0.5 bg-[#E07A5F] rounded" />
        </div>
      </div>
      <Sparkles className="absolute -right-1 -top-1 w-4 h-4 text-[#C7B9A5]" />
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#F6F1E9]/20 bg-[#14120e]/70 backdrop-blur-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3">
            <Badge />
            <div>
              <p className="text-[#F6F1E9] font-semibold leading-5">Robot Arcade</p>
              <p className="text-xs text-[#E9E1D2]/80 -mt-0.5">Vintage‑cartoon Discord</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[#E9E1D2]/90">
            <a href="#features" className="hover:text-[#F6F1E9] transition">Features</a>
            <a href="#community" className="hover:text-[#F6F1E9] transition">Community</a>
            <a href="#faq" className="hover:text-[#F6F1E9] transition">FAQ</a>
          </nav>

          <a
            href="https://discord.com/invite/example"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#7A9E9F] hover:bg-[#6b8f90] text-[#171412] px-4 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F1E9]/60"
          >
            <MessageCircle className="w-4 h-4" />
            Join Discord
          </a>
        </div>
      </div>
    </header>
  );
}
