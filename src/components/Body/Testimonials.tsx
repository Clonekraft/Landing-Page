// src/components/Testimonials.tsx — FINAL VERSION
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const testimonials = [
  {
    name: "Chidera Okeke",
    location: "Lagos, Nigeria",
    text: "I sent a photo of my grandmother’s 1972 rocking chair. They rebuilt it exactly — even the creak is the same. I cried when it arrived.",
  },
  {
    name: "Tunde Adebayo",
    location: "Abuja, Nigeria",
    text: "Found a discontinued Minotti sofa from 2011. Clonekraft made it in walnut. Looks better than the original. Insane craftsmanship.",
  },
  {
    name: "Aisha Yusuf",
    location: "London → Lagos",
    text: "I live between two cities. Clonekraft shipped my cloned Pierre Jeanneret chair to both homes. Same soul, two continents.",
  },
  {
    name: "Emeka Okafor",
    location: "Port Harcourt, Nigeria",
    text: "They cloned my father’s old study desk from one blurry photo. The grain matching is witchcraft. Pure witchcraft.",
  },
  {
    name: "Fatima Bello",
    location: "Dubai",
    text: "I’m Nigerian in Dubai. Clonekraft brought a piece of home to my desert apartment. Now my living room tells my story.",
  },
  {
    name: "David Cohen",
    location: "New York",
    text: "I’m not even Nigerian — but the quality coming out of Clonekraft is the best I’ve ever seen. Period.",
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  return (
    <section
      className={`py-32 md:py-40 overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span style={{ color: isDark ? "#fff" : "#000" }}>
              What our Customers Say
            </span>
            <br />

            <span
              className="font-extrabold flex justify-center items-center gap-3 mt-2"
              style={{ color: bronze }}
            >
              across Nigeria
              {/* Rounded Nigerian Flag */}
              <span className="inline-block w-8 h-5 overflow-hidden rounded-md shadow-md">
                <svg width="100%" height="100%" viewBox="0 0 3 2">
                  <rect width="1" height="2" x="0" fill="#008753" />
                  <rect width="1" height="2" x="1" fill="#ffffff" />
                  <rect width="1" height="2" x="2" fill="#008753" />
                </svg>
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 70,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8"
            style={{ animationPlayState: "running" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {/* First set */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} isDark={isDark} />
            ))}
            {/* Duplicate set */}
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i + testimonials.length}
                {...t}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, location, text, isDark }: any) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex-shrink-0 w-96 rounded-3xl p-8 shadow-2xl border"
      style={{
        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Smaller Stars */}
      <div className="flex mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#C1A170"
            stroke="#C1A170"
            className="mr-1"
          />
        ))}
      </div>

      {/* Clean text — no italics */}
      <p
        className="text-base md:text-lg leading-relaxed mb-6"
        style={{ color: isDark ? "#e2e2e2" : "#222" }}
      >
        {text}
      </p>

      <div>
        <p className="font-medium" style={{ color: isDark ? "#fff" : "#000" }}>
          {name}
        </p>
        <p className="text-sm" style={{ color: "#C1A170" }}>
          {location}
        </p>
      </div>
    </motion.div>
  );
};

export default Testimonials;
