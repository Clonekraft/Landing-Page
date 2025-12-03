// src/pages/GalleryView.tsx  → NOW WITH CLICK-TO-VIEW LIGHTBOX
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Replace with your actual images
import img1 from "../../assets/dec/a.jpg";
import img2 from "../../assets/dec/b.jpg";
import img3 from "../../assets/dec/c.jpg";
// import img4 from "../../assets/furniture.jpg";
// ... add the rest when ready

const images = [img1, img2, img3 /* img4, img5, ... */];

const GalleryView = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
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
    <>
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
              <span style={{ color: isDark ? "#fff" : "#000" }}>
                Our Gallery
              </span>
              <br />
              <span className="font-bold" style={{ color: bronze }}>
                Of Masterpieces
              </span>
            </h1>
            <p
              className="text-lg md:text-xl"
              style={{ color: isDark ? "#999" : "#555" }}
            >
              Every piece started as one photo.{" "}
              <strong className="text-bronze">Click to enlarge</strong>
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
                className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={src}
                  alt={`Masterpiece ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${bronze}33, transparent 60%)`,
                  }}
                >
                  <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex]}
                alt={`Full view ${selectedIndex + 1}`}
                className="w-full h-auto max-h-screen object-contain rounded-2xl shadow-3xl"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
              >
                <X size={32} className="text-white" />
              </button>

              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    disabled={selectedIndex === 0}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft size={40} className="text-white" />
                  </button>
                  <button
                    onClick={goNext}
                    disabled={selectedIndex === images.length - 1}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight size={40} className="text-white" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md text-white font-medium">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryView;
