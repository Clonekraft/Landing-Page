// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import furnitureImg from "../../../src/assets/brown.jpg";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Only subtle bronze accents
  const bronze = "#C1A170";

  const stats = [
    { value: "1 Photo", label: "Upload" },
    { value: "14 Days", label: "Delivery" },
    { value: "100%", label: "Identical" },
    { value: "Premium", label: "Materials" },
  ];

  return (
    <>
      {/* Soft Golden Dust Universe */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 0.5,
              height: Math.random() * 3 + 0.5,
              backgroundColor: bronze,
              opacity: isDark ? 0.15 : 0.08,
              boxShadow: isDark
                ? `0 0 ${8 + Math.random() * 12}px ${bronze}`
                : "none",
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{ y: [-100, window.innerHeight + 100] }}
            transition={{
              duration: 30 + Math.random() * 40,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT — Clean, Minimal Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ color: isDark ? "#ffffff" : "#000000" }}
              >
                Upload a photo,
                <br />
                <span className="font-bold">
                  We build the{" "}
                  <span style={{ color: bronze, fontWeight: 600 }}>
                    exact replica
                  </span>
                  .
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl font-light leading-relaxed max-w-xl"
                style={{ color: isDark ? "#e2e2e2" : "#333333" }}
              >
                Our AI analyzes your furniture from a single image. Master
                craftsmen hand-build a perfect duplicate using premium
                materials. Delivered in 14 days.
              </motion.p>

              {/* COMING SOON Button — Minimal Bronze Accent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-12 py-5 rounded-full font-medium text-lg tracking-wider overflow-hidden shadow-2xl"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.05)",
                    border: `1px solid ${
                      isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                    }`,
                    backdropFilter: "blur(12px)",
                    color: isDark ? "#ffffff" : "#000000",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-5 h-5" style={{ color: bronze }} />
                    COMING SOON
                  </span>
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20"
                    style={{
                      background: `radial-gradient(circle at 30% 50%, ${bronze}, transparent)`,
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT — Image with Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,0.6)"
                    : "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={furnitureImg}
                  alt="Handcrafted furniture replica"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Stats — Clean & Minimal */}
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
                  className="absolute p-4 rounded-2xl backdrop-blur-xl border shadow-xl"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.7)",
                    borderColor: isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(0,0,0,0.1)",
                    top: i < 2 ? "10%" : "auto",
                    bottom: i >= 2 ? "10%" : "auto",
                    left: i % 2 === 0 ? "-10%" : "auto",
                    right: i % 2 === 1 ? "-10%" : "auto",
                  }}
                >
                  <p
                    className="font-bold text-xl"
                    style={{ color: isDark ? "#ffffff" : "#000000" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs font-medium opacity-70"
                    style={{ color: isDark ? "#e2e2e2" : "#333" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
