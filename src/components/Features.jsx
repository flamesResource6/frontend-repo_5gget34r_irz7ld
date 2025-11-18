import { Shield, Users, Star, Gamepad2, Music2, Heart } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: Gamepad2, title: 'Arcade Nights', desc: 'Cozy co-op and retro tournaments with friends.' },
    { icon: Star, title: 'Cartoon Art Club', desc: 'Share doodles, stickers, and retro fan art.' },
    { icon: Users, title: 'Wholesome Community', desc: 'Gentle vibes, small rituals, and daily hi’s.' },
    { icon: Music2, title: 'Jukebox Corner', desc: 'Lo‑fi, city pop, and anime OST on loop.' },
    { icon: Shield, title: 'Chill Moderation', desc: 'Friendly staff and calm, clear rules.' },
    { icon: Heart, title: 'Weekly Spotlights', desc: 'Shoutouts for artists, helpers, and newcomers.' },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #E07A5F22, transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F6F1E9]">What feels good here</h2>
          <p className="mt-2 text-[#E9E1D2]/90">Warm tones, soft corners, and a cartoon robot cheering you on.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-[#F6F1E9]/15 bg-[#F6F1E9]/5 p-6 backdrop-blur-sm hover:bg-[#F6F1E9]/7 transition group">
              <Icon className="w-6 h-6 text-[#7A9E9F] group-hover:text-[#6b8f90]" />
              <h3 className="mt-3 text-[#F6F1E9] font-semibold">{title}</h3>
              <p className="mt-1 text-[#E9E1D2]/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
