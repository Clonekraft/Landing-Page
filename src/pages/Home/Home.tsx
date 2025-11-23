// src/pages/Home.tsx (or wherever your main page is)
import Hero from "../../components/Body/Hero";
import FullPage from "../../components/Body/FullPage";
import GalleryView from "../../components/Body/GalleryView";
import Testimonials from "../../components/Body/Testimonials";
import FAQ from "../../components/Body/FAQ";
import Contact from "../../components/Footer/Contact";

const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden max-w-screen">
      {/* Hero Section */}
      <Hero />

      {/* How It Works */}
      <div id="how-it-works">
        <FullPage />
      </div>

      {/* Gallery View (9-image grid) */}
      <div id="gallery">
        <GalleryView />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
