import { Shield, Users, Sparkles, Gamepad2, Music2 } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: Gamepad2, title: 'Game Nights', desc: 'Weekly co-op sessions and community tournaments.' },
    { icon: Sparkles, title: 'Fan Art & Cosplay', desc: 'Show off your creativity in themed channels.' },
    { icon: Users, title: 'Friendly Community', desc: 'Find teammates, friends, and welcoming vibes.' },
    { icon: Music2, title: 'Lo-fi + Anime OST', desc: 'Chill music bots and curated playlists.' },
    { icon: Shield, title: 'Safe & Moderated', desc: 'Active staff and smart automod keep it comfy.' },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What you'll love</h2>
          <p className="mt-2 text-slate-300/90">Playful, semi-cartoon style with interactive bits throughout.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/7 transition group">
              <Icon className="w-6 h-6 text-indigo-300 group-hover:text-indigo-200" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-slate-300/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
