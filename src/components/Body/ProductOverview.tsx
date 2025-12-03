// src/components/ProductOverview.tsx — FINAL: Fixed + Full Story Integrated Perfectly
import { motion } from "framer-motion";
import { Upload, Shield, Wrench, Award } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

import overviewImg from "../../../src/assets/overview.jpg"; // ← Your wide hero image

const ProductOverview = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  const particles = [...Array(50)];

  const highlights = [
    { icon: Upload, value: "Any Image", label: "Photos, sketches, videos" },
    { icon: Shield, value: "Safe Payments", label: "Escrow protection" },
    {
      icon: Wrench,
      value: "Master Craftsmanship",
      label: "Hand-built precision",
    },
  ];

  return (
    <>
      {/* Floating Bronze Dust */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 0.8,
              height: Math.random() * 4 + 0.8,
              backgroundColor: bronze,
              opacity: isDark ? 0.14 : 0.07,
              boxShadow: isDark
                ? `0 0 ${12 + Math.random() * 20}px ${bronze}`
                : "none",
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{ y: [-300, window.innerHeight + 300] }}
            transition={{
              duration: 50 + Math.random() * 60,
              repeat: Infinity,
              delay: Math.random() * 40,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* LEFT — Full Story & Text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ color: isDark ? "#ffffff" : "#000000" }}
              >
                Clonekraft:
                <br />
                <span style={{ color: bronze }}>Africa’s</span> Furniture-Tech
                Engine
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1.2 }}
                className="space-y-7 text-[15px] md:text-[15px] font-light leading-relaxed"
                style={{ color: isDark ? "#d4d4d4" : "#333333" }}
              >
                <p>
                  Clonekraft sits inside a very real African story — one every
                  designer, homeowner, and builder understands deeply. For
                  years, ordering custom furniture or replicas across the
                  continent has felt like a gamble. You find someone online, you
                  send money, and you hope the final piece looks something like
                  what you imagined. Sometimes it works. Many times, it doesn’t.
                  Wrong dimensions. Wrong materials. Missed deadlines. And for
                  too many people, the worst-case scenario: the “vendor or
                  Carpenter” disappears once the transfer goes through.
                </p>

                <p className="font-medium text-white bg-black/80 inline-block px-4 py-2 rounded">
                  That broken system is the reason Clonekraft exists.
                </p>

                <p>
                  Clonekraft is the flagship product of Lukas Design Lab, built
                  to fix the chaos around Africa’s replica and custom-made
                  furniture market. We aren’t just offering another platform,
                  We’re rebuilding the entire process from the foundation up,
                  using AI and disciplined craftsmanship to restore trust,
                  accuracy, and professionalism.
                </p>

                <p className="font-semibold">Here’s how our system works.</p>

                <p>
                  You upload your designs—photos, videos, screenshots, sketches,
                  anything. Our AI model engages them directly, asks the right
                  questions, extracts your preferences, identifies style
                  choices, and interprets dimensions, materials, and
                  construction details with clarity. The output becomes a
                  precise build specification. Our production hub executes the
                  work under a disciplined process.
                </p>

                <p>
                  Clonekraft is built for African users, African problems, and
                  African ambition. And we are not doing this alone. As a
                  TEF-backed venture, we are part of a new generation of
                  founders working to create solutions that scale beyond one
                  neighborhood or one city. We’re building something that
                  rewrites how the continent orders furniture—reliable replicas,
                  professional craftsmanship, clear pricing, modern workflows,
                  and confidence that your money is safe.
                </p>

                <p className="font-medium">
                  This is more than a platform. It’s a new standard.
                </p>

                <p className="font-medium">
                  Clonekraft is Africa’s furniture-tech engine, precision from
                  AI, excellence from our production hub, and a system built to
                  bring order, structure, and trust back into the world of
                  carpentry.
                </p>

                {/* TEF Backing */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="relative p-8 rounded-3xl overflow-hidden shadow-2xl my-12"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, rgba(193,161,112,0.15), rgba(193,161,112,0.05))"
                      : "linear-gradient(135deg, #faf8f5, #f5f0e8)",
                    border: `1.5px solid ${bronze}40`,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
                  <div className="relative flex items-center gap-5">
                    <Award
                      size={32}
                      style={{ color: bronze }}
                      className="flex-shrink-0"
                    />
                    <div>
                      <p
                        className="text-xl md:text-xl font-bold"
                        style={{ color: bronze }}
                      >
                        Backed by the Tony Elumelu Foundation
                      </p>
                      <p
                        className="text-[12px] font-medium mt-2"
                        style={{ color: isDark ? "#e2e2e2" : "#111" }}
                      >
                        We’re not just a platform.
                        <br />
                        We’re Africa’s next-generation standard.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <p
                  className="text-xl font-medium"
                  style={{ color: bronze }}
                >
                  A new story for African furniture makers and consumers.
                  <br />
                  And we intend to lead it.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT — Image + Cards */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden shadow-3xl"
              >
                <img
                  src={overviewImg}
                  alt="Clonekraft — Precision meets African craftsmanship"
                  className="w-full h-auto object-cover object-center block"
                />
                <div className="absolute inset-0 pointer-events-none" />
              </motion.div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                    className="p-7 rounded-3xl backdrop-blur-xl border shadow-2xl"
                    style={{
                      background: isDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.92)",
                      borderColor: isDark
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(0,0,0,0.1)",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon
                      size={40}
                      style={{ color: bronze }}
                      className="mb-4"
                    />
                    <p
                      className="text-2xl font-bold"
                      style={{ color: isDark ? "#fff" : "#000" }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="text-sm font-medium opacity-75 mt-1"
                      style={{ color: isDark ? "#ccc" : "#444" }}
                    >
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOverview;
