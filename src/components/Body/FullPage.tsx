// src/components/FullPage.tsx — FINAL MASTERPIECE (Updated)
import { motion } from "framer-motion";
import { Camera, Hammer, Truck, Gem, Palette, Ruler } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import woodImg from "../../../src/assets/dec/d.jpg";

export default function FullPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <>
      {/* SECTION 1 — HOW IT WORKS */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            How It{" "}
            <span className="font-bold" style={{ color: bronze }}>
              Works
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[12px] md:text-2xl font-light max-w-3xl mx-auto mb-20"
            style={{ color: isDark ? "#ccc" : "#444" }}
          >
            Three simple steps from inspiration to reality
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Camera,
                num: "01",
                title: "Upload Your Files",
                desc: "Photos, videos, sketches — anything works.",
              },
              {
                icon: Hammer,
                num: "02",
                title: "We Build It",
                desc: "Master craftsmen execute with AI precision.",
              },
              {
                icon: Truck,
                num: "03",
                title: "Delivered Timely",
                desc: "Reliable, fully assembled, across Africa.",
              },
            ].map((step) => (
              <motion.div
                key={step.num}
                variants={item as any}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-bronze/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl blur-xl" />
                <div className="relative bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/10 rounded-3xl p-10">
                  <div
                    className="text-6xl font-bold mb-6 opacity-20"
                    style={{ color: bronze }}
                  >
                    {step.num}
                  </div>
                  <step.icon
                    size={64}
                    className="mb-8 mx-auto"
                    style={{ color: bronze }}
                  />
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: isDark ? "#fff" : "#000" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: isDark ? "#ddd" : "#333" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — MATERIALS & CRAFT (UPDATED) */}
      <section className="py-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: isDark ? "#fff" : "#000" }}
            >
              Built Like{" "}
              <span className="font-bold" style={{ color: bronze }}>
                Art
              </span>
            </h2>
            <p
              className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed"
              style={{ color: isDark ? "#ddd" : "#222" }}
            >
              We don’t just replicate furniture. We perfect it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src={woodImg}
                alt="Premium hardwood and materials"
                className="rounded-3xl shadow-3xl w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-12"
            >
              {/* First Feature — Updated */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex gap-6"
              >
                <Gem size={48} style={{ color: bronze, flexShrink: 0 }} />
                <div>
                  <h4
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: isDark ? "#fff" : "#000" }}
                  >
                    Only Premium Boards & Hardwoods
                  </h4>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: isDark ? "#ddd" : "#444" }}
                  >
                    MFC, E1-grade boards, Egger & Krono — all sustainably
                    sourced.
                  </p>
                </div>
              </motion.div>

              {/* Remaining Features */}
              {[
                {
                  icon: Palette,
                  title: "Perfect Color Matching",
                  desc: "Every stain, finish, and tone — indistinguishable from the original.",
                },
                {
                  icon: Ruler,
                  title: "Millimeter Precision",
                  desc: "AI-guided specs + hand-finishing = flawless proportions.",
                },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.8 }}
                  className="flex gap-6"
                >
                  <feat.icon
                    size={48}
                    style={{ color: bronze, flexShrink: 0 }}
                  />
                  <div>
                    <h4
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ color: isDark ? "#fff" : "#000" }}
                    >
                      {feat.title}
                    </h4>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: isDark ? "#ddd" : "#444" }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TESTIMONIAL */}
      {/* <section className="py-32 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-5xl font-extralight leading-tight max-w-4xl mx-auto px-6"
          style={{ color: isDark ? "#fff" : "#000" }}
        >
          “I found a 1970s Italian armchair in a magazine.
          <span className="font-bold" style={{ color: bronze }}>
            {" "}
            It no longer existed anywhere.
          </span>
          <br />
          <br />
          Clonekraft brought it back to life —
          <span className="font-bold">better than the original.</span>”
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-lg font-medium"
          style={{ color: bronze }}
        >
          — Ibeneme I, Paris, France
        </motion.p>
      </section> */}
    </>
  );
}
