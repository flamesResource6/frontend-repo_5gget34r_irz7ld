import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Subtle starfield backdrop */}
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_50%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Anime Arcadia • Community-run fan space</p>
          <div className="flex items-center gap-4 text-sm text-slate-300/80">
            <a href="#" className="hover:text-white transition">Rules</a>
            <span className="opacity-40">•</span>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
