import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="community" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-purple-600/30 p-8 sm:p-12 backdrop-blur-xl shadow-[0_20px_80px_rgba(99,102,241,0.25)]">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-extrabold text-white"
          >
            Ready to squad up?
          </motion.h3>
          <p className="mt-3 text-slate-200/90 max-w-2xl">
            Click below to hop in. Say hi in introductions and grab your roles. We can’t wait to meet you.
          </p>
          <div className="mt-6">
            <a
              href="https://discord.com/invite/example"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
            >
              <MessageCircle className="w-5 h-5" /> Join Anime Arcadia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
