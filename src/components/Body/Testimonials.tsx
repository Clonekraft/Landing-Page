// src/components/FullPage.tsx — CURRENT FINAL VERSION
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";


export default function FullPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  return (
    <>
      {/* SECTION 1 — HOW IT WORKS */}
      {/* ... (unchanged, same as before) */}

      {/* SECTION 2 — MATERIALS & CRAFT */}
      {/* ... (unchanged, same as before) */}

      {/* SECTION 3 — THE JOURNEY BEGINS HERE (NEW) */}
      <section className={`py-32 md:py-48 ${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <h2
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: isDark ? "#fff" : "#000" }}
            >
              The Journey
              <br />
              <span className="font-extrabold" style={{ color: bronze }}>
                Begins Here
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
              style={{ color: isDark ? "#ccc" : "#444" }}
            >
              Clonekraft is backed by the{" "}
              <span className="font-semibold" style={{ color: bronze }}>
                Tony Elumelu Foundation
              </span>
              .<br />
              We’re building Africa’s furniture-tech engine — combining AI and
              disciplined craftsmanship to bring precision, trust, and
              excellence to every piece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="pt-12"
            >
              <p className="text-lg md:text-xl font-medium italic">
                Real customer stories will appear here
                <br />
                <span className="not-italic" style={{ color: bronze }}>
                  as soon as we launch our first production batches.
                </span>
              </p>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="mx-auto w-32 h-1 rounded-full"
              style={{
                backgroundColor: bronze,
                boxShadow: `0 0 30px ${bronze}`,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Next section (Contact, CTA, etc.) continues below... */}
    </>
  );
}
