// src/components/Gallery.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

import seatImg from "../../../src/assets/dec/e.jpg";
import workshopImg from "../../../src/assets/dec/f.jpg";
import woodImg from "../../../src/assets/dec/d.jpg";

const Gallery = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT — Header + Description */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight ">
              <span style={{ color: isDark ? "#fff" : "#000" }} className="mr-2">
                Clonekraft: Every Piece
              </span>
        
              <span className="font-bold" style={{ color: bronze }}>
                Reborn
              </span>
            </h2>
            <p
              className="text-lg md:text-xl font-light leading-relaxed max-w-lg"
              style={{ color: isDark ? "#ccc" : "#444" }}
            >
              From forgotten antiques to modern icons — we don’t copy furniture.
              We resurrect it. With soul. With precision. With respect.
            </p>
          </motion.div>

          {/* RIGHT — 3 Parallax Floating Images */}
          <div className="relative h-[700px] md:h-[700px]">
            {/* Image 1 — Top Left */}
            <motion.div
              initial={{ y: 60 }}
              animate={{ y: -60 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-80 md:w-96 h-96 md:h-[350px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.7)"
                  : "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={seatImg}
                alt="Handcrafted chair"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 — Middle Right */}
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 80 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute top-4 right-[-120px] w-72 md:w-88 h-64 md:h-[320px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.7)"
                  : "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={workshopImg}
                alt="Artisan workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3 — Bottom Left */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -100 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute bottom-28 left-12 w-80 md:w-96 h-64 md:h-[320px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.7)"
                  : "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={woodImg}
                alt="Premium wood detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
