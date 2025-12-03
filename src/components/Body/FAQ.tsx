// src/components/FAQ.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does Clonekraft actually work?",
    a: "Upload one clear photo of any furniture. Our AI analyzes every angle, material, and detail. Master carpenters then hand-build an exact replica using premium hardwoods. Delivered fully assembled in 14 days.",
  },
  {
    q: "Is it really 100% identical?",
    a: "Yes. We match wood grain, color, finish, joints, and proportions down to the millimeter. Most clients say the Clonekraft version looks and feels better than the original.",
  },
  {
    q: "What if the furniture is discontinued or vintage?",
    a: "That’s where we shine. We specialize in bringing back pieces that no longer exist — 1970s Italian chairs, mid-century icons, family heirlooms. If you have a photo, we can rebuild it.",
  },
  {
    q: "What materials do you use?",
    a: "Only solid hardwoods: oak, walnut, mahogany, teak. Never veneers or MDF. All finishes are hand-applied, non-toxic, and heirloom-grade.",
  },
];

const FAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-64 md:py-64">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: isDark ? "#fff" : "#000" }}>Questions?</span>
            <br />
            <span className="font-bold" style={{ color: bronze }}>
              Answers.
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-white/10 dark:border-white/10 pb-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex items-center justify-between group py-4"
              >
                <h3
                  className="text-xl md:text-2xl font-medium pr-8"
                  style={{ color: isDark ? "#fff" : "#000" }}
                >
                  {item.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ChevronDown
                    size={28}
                    style={{
                      color:
                        openIndex === i ? bronze : isDark ? "#999" : "#666",
                    }}
                    className="group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                  marginTop: openIndex === i ? 16 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p
                  className="text-lg leading-relaxed max-w-4xl"
                  style={{ color: isDark ? "#ccc" : "#444" }}
                >
                  {item.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
