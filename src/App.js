import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="bg-dark text-white min-h-screen overflow-x-hidden">
      {/* ===== Hero Section ===== */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.img
          src="/logo.png"
          alt="Target Marketing Academy Logo"
          className="w-56 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gold tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          TARGET MARKETING ACADEMY
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Innovation. Intelligence. Impact.  
          <br />
          Where education meets AI-driven success.
        </p>
        <div className="mt-8 flex gap-6">
          <button className="bg-gold text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition">
            Join The Academy
          </button>
          <button className="border border-gold text-gold px-6 py-3 rounded-xl hover:bg-gold hover:text-black transition">
            Explore GPS Ecosystem
          </button>
        </div>
      </section>

      {/* ===== Brands Section ===== */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gold">Our Ecosystem</h2>
        <div className="grid md:grid-cols-4 gap-8 px-6">
          {["GPS TRADING", "GPS MARKETING", "GPS DESIGN", "GPS DROPSHIPPING"].map(
            (brand, i) => (
              <motion.div
                key={i}
                className="p-6 border border-gold rounded-2xl bg-[#111] shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gold mb-2">
                  {brand}
                </h3>
                <p className="text-gray-400 text-sm">
                  Explore innovation, leadership, and growth powered by AI.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ===== Join Section ===== */}
      <section className="py-20 bg-[#111] text-center">
        <motion.h2
          className="text-3xl font-bold text-gold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join the Future of Marketing
        </motion.h2>
        <p className="text-gray-400 mb-8 px-6 max-w-2xl mx-auto">
          Join thousands of visionaries learning, earning, and growing with
          Target Marketing Academy.
        </p>
        <button className="bg-gold text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition">
          Join Now
        </button>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-6 border-t border-gray-800 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Target Marketing Academy | Powered by GPS AI
      </footer>
    </div>
  );
}

export default App;
