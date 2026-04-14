"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover scale-105"
      >
        {/* Best practice: put video in /public folder */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#022F51]/60 to-black/80" />

      {/* ✨ Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white"
        >
          Hi, I'm{" "}
          <span className="text-[#8AD5E0] drop-shadow-lg">Sadaf</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg sm:text-2xl text-white/80"
        >
          Frontend Developer | React & Next.js Enthusiast
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-[#8AD5E0] text-black font-semibold shadow-lg hover:scale-105 hover:shadow-[#8AD5E0]/40 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-[#8AD5E0] text-[#8AD5E0] font-semibold hover:bg-[#8AD5E0]/10 hover:scale-105 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 text-white/60 text-sm"
        >
          Scroll Down ↓
        </motion.div>

      </div>
    </section>
  );
}