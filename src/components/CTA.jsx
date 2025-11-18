import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="community" className="relative py-20">
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, #7A9E9F33, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-[#F6F1E9]/15 bg-gradient-to-br from-[#F6F1E9]/15 via-[#C7B9A5]/10 to-[#7A9E9F]/15 p-8 sm:p-12 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-extrabold text-[#F6F1E9]"
          >
            Pull up a chair and say hi
          </motion.h3>
          <p className="mt-3 text-[#E9E1D2]/90 max-w-2xl">
            Vintage‑cartoon warmth, modern hangout energy. Hop in, grab a role, and meet the robot.
          </p>
          <div className="mt-6">
            <a
              href="https://discord.com/invite/example"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#F6F1E9] text-[#171412] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
            >
              <MessageCircle className="w-5 h-5" /> Join Robot Arcade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
