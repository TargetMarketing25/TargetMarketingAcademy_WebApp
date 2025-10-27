import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-gray-900 text-white font-[Poppins] overflow-hidden">
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800 bg-black/70 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-4">
          <motion.img
            src="/logo.png"
            alt="Target Marketing Academy Logo"
            className="w-16 h-16 rounded-lg shadow-[0_0_25px_rgba(255,215,0,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <h1 className="text-2xl font-bold text-yellow-400 tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">
            TARGET MARKETING ACADEMY
          </h1>
        </div>
        <nav className="flex gap-8 text-gray-300 font-medium">
          {['GPS TRADING', 'GPS MARKETING', 'GPS DROPSHIPPING', 'GPS LANGUAGES', 'GPS STUDIO'].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              whileHover={{ scale: 1.1, color: '#FFD700' }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-40 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl font-extrabold text-yellow-400 mb-6 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
        >
          Innovation. Intelligence. Impact.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          A next-generation educational ecosystem merging <span className="text-yellow-400">marketing</span>, <span className="text-yellow-400">trading</span>, and <span className="text-yellow-400">AI</span> under one visionary platform — <b>GPS Systems</b>.
        </motion.p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-10 pb-32">
        {[
          { name: 'GPS TRADING', icon: '⚜️', color: 'from-yellow-400 to-yellow-700' },
          { name: 'GPS MARKETING', icon: '💡', color: 'from-blue-400 to-blue-700' },
          { name: 'GPS DROPSHIPPING', icon: '💼', color: 'from-purple-400 to-purple-700' },
          { name: 'GPS LANGUAGES', icon: '🗣️', color: 'from-green-400 to-green-700' },
          { name: 'GPS STUDIO', icon: '🎨', color: 'from-pink-400 to-purple-600' }
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`p-8 rounded-2xl text-center bg-gradient-to-br ${section.color} shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transform transition-all duration-500 cursor-pointer`}
          >
            <div className="text-5xl mb-3 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">{section.icon}</div>
            <h3 className="font-semibold text-xl tracking-wide text-black">{section.name}</h3>
          </motion.div>
        ))}
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 bg-black/60 backdrop-blur-md">
        © 2025 <span className="text-yellow-400 font-semibold">Target Marketing Academy</span> — GPS AI SYSTEM
      </footer>
    </div>
  );
}