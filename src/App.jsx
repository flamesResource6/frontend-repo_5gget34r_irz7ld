import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0e0a] text-[#2b2520]">
      {/* Vintage vignette + film grain */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,14,10,0)_0%,rgba(15,14,10,0.5)_60%,rgba(15,14,10,0.9)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.6\\'/></svg>')",
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-[#F6F1E9]/15 bg-[#14120e]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#E9E1D2]/80 text-sm">© {new Date().getFullYear()} Robot Arcade • A cozy, vintage‑cartoon server</p>
          <div className="flex items-center gap-4 text-sm text-[#E9E1D2]/70">
            <a href="#" className="hover:text-[#F6F1E9] transition">Rules</a>
            <span className="opacity-40">•</span>
            <a href="#faq" className="hover:text-[#F6F1E9] transition">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
