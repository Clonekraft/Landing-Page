// src/pages/GalleryView.tsx  (or put in any page)
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

// Replace with your actual 9 images
import img1 from "../../assets/seat.jpg";
import img2 from "../../assets/brown.jpg";
import img3 from "../../assets/burn.jpg";
import img4 from "../../assets/furniture.jpg";
import img5 from "../../assets/dark.jpg";
import img6 from "../../assets/gray.jpg";
import img7 from "../../assets/smooth.jpg";
import img8 from "../../assets/coffee.jpg";
import img9 from "../../assets/pray.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const GalleryView = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`min-h-screen py-24 md:py-32 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span style={{ color: isDark ? "#fff" : "#000" }}>Our Gallery</span>
            <br />
            <span className="font-bold" style={{ color: bronze }}>
              Of Masterpieces
            </span>
          </h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: isDark ? "#999" : "#555" }}
          >
            Every piece started as one photo.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={item as any}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={src}
                alt={`Reborn furniture ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Subtle bronze overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${bronze}22, transparent 50%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryView;
