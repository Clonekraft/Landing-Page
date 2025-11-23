// src/components/FullPage.tsx — THE FINAL MASTERPIECE
import { motion } from "framer-motion";
import {

  Camera,
  Hammer,
  Truck,

  Gem,

  Palette,
  Ruler,

} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

import woodImg from "../../../src/assets/burn.jpg";

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
      {/* SECTION 1 — HEROIC HOW IT WORKS */}
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
                title: "Upload Your Photo",
                desc: "Any angle. Any lighting. Our AI understands.",
              },
              {
                icon: Hammer,
                num: "02",
                title: "We Rebirth It",
                desc: "Master carpenters build it by hand — no shortcuts.",
              },
              {
                icon: Truck,
                num: "03",
                title: "Delivered in 14 Days",
                desc: "Fully assembled. White-glove. Ready to live in.",
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

      {/* SECTION 2 — MATERIALS & CRAFT */}
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
              className="text-xl font-light max-w-3xl mx-auto"
              style={{ color: isDark ? "#ccc" : "#444" }}
            >
              We don’t replicate furniture. We honor it.
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
                alt="Premium wood"
                className="rounded-3xl shadow-3xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-10"
            >
              {[
                {
                  icon: Gem,
                  title: "Only Premium Hardwoods",
                  desc: "Oak, walnut, mahogany — sourced sustainably",
                },
                {
                  icon: Palette,
                  title: "Perfect Color Matching",
                  desc: "Every stain, every finish — indistinguishable",
                },
                {
                  icon: Ruler,
                  title: "Millimeter Precision",
                  desc: "CNC + hand-finishing = flawless proportions",
                },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="flex gap-6"
                >
                  <feat.icon
                    size={40}
                    style={{ color: bronze, flexShrink: 0 }}
                  />
                  <div>
                    <h4
                      className="text-2xl font-bold mb-2"
                      style={{ color: isDark ? "#fff" : "#000" }}
                    >
                      {feat.title}
                    </h4>
                    <p
                      className="text-lg"
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

      {/* SECTION 3 — TESTIMONIAL / VIBE */}
      <section className="py-32 text-center">
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
      </section>

      {/* SECTION 4 — FINAL CTA — MONUMENTAL */}
      {/* <section className="py-56 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold leading-none mb-16"
              style={{ color: isDark ? "#fff" : "#000" }}
            >
              Your Dream
              <br />
              <span
                className="font-bold text-6xl md:text-10xl"
                style={{ color: bronze }}
              >
                Deserves to Exist
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-4 rounded-full text-3xl font-bold tracking-wider text-black overflow-hidden shadow-4xl"
                style={{
                  background: "linear-gradient(135deg, #C1A170, #e6c08e)",
                  boxShadow: isDark
                    ? "0 0 120px #C1A170cc"
                    : "0 40px 100px rgba(193,161,112,0.7)",
                }}
              >
                <span className="flex items-center gap-6 text-[16px] font-bold">
                  <Sparkles className="w-6 h-6" />
                  JOIN THE WAITLIST
                  <ArrowRight className="w-6 h-6" />
                </span>
              </motion.button>
            </motion.div>

            <p
              className="mt-16 text-xl font-bold"
              style={{ color: isDark ? "#999" : "#555" }}
            >
              Limited spots. First 500 get{" "}
              <span className="font-bold" style={{ color: bronze }}>
                free cloning
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
