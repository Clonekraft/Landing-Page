import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Shield, Sparkles } from "lucide-react";

const Policy = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  return (
    <div
      className={`min-h-screen pt-28 pb-40 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div
              className="p-6 rounded-full shadow-xl backdrop-blur-md"
              style={{ background: bronze + "20" }}
            >
              <Shield size={52} style={{ color: bronze }} />
            </div>
          </div>

          {/* Improved Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span style={{ color: isDark ? "#fff" : "#000" }}>Our Privacy</span>
            <br />
            <span style={{ color: bronze }}>Promise</span>
          </h1>

          <p
            className="text-lg md:text-xl font-medium opacity-80"
            style={{ color: isDark ? "#bbb" : "#555" }}
          >
            Last updated: November 2025 • Crafted with transparency & trust
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-16 text-lg leading-relaxed">
          <Section title="Your photos belong entirely to you — always.">
            We respect the privacy of your personal space. Your uploaded
            furniture images are used **only** to craft your order.
            <br />
            <br />
            Once your item is delivered, all associated images and materials are
            **permanently deleted within 7 days** from our servers.
          </Section>

          <Section title="Never used for training. Never added to datasets.">
            We do <strong>not</strong> use your images for:
            <ul className="list-disc pl-5 mt-2">
              <li>AI training</li>
              <li>Internal improvements</li>
              <li>Marketing</li>
              <li>Anything outside your order</li>
            </ul>
            Your space is your space alone.
          </Section>

          <Section title="We only collect what we absolutely need.">
            To fulfill your order, we collect:
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Email — for communication and delivery updates only.</li>
              <li>Uploaded photos — deleted 7 days post-delivery.</li>
              <li>
                Shipping address — shared securely with our logistics partners.
              </li>
            </ul>
            <br />
            We do not collect usage data, browsing behavior, cookies, or
            tracking identifiers. No hidden analytics.
          </Section>

          <Section title="Payments are fully secure.">
            All payments are processed by <strong>Stripe</strong>, one of the
            world’s most trusted financial partners.
            <br />
            <br />
            We never see, store, or interact with your card information.
          </Section>

          <Section title="Your furniture. Your design. Your rights.">
            Everything you create with CloneKraft is **100% yours**.
            <br />
            <br />
            We do not:
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Claim ownership of your designs</li>
              <li>Replicate your furniture for others</li>
              <li>Sell or share your concepts</li>
            </ul>
            Your creation remains exclusive to you.
          </Section>

          <Section title="How we protect your data.">
            We use:
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Encrypted storage for uploaded images</li>
              <li>Secure HTTPS for all communication</li>
              <li>Automatic deletion protocols</li>
              <li>Restricted internal access</li>
            </ul>
            Only the essential systems needed to fulfill your order ever touch
            your data.
          </Section>

          <Section title="Have questions, concerns, or requests?">
            <p className="mb-3">
              We’re always here to support you. For privacy-related inquiries:
            </p>
            <a
              href="mailto:privacy@clonekraft.com"
              className="inline-flex items-center gap-3 font-semibold underline"
              style={{ color: bronze }}
            >
              privacy@clonekraft.com
              <Sparkles size={18} />
            </a>
          </Section>
        </div>

      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h2
        className="text-3xl md:text-4xl font-extrabold"
        style={{ color: isDark ? "#fff" : "#000" }}
      >
        {title}
      </h2>

      <div
        className="text-lg leading-relaxed"
        style={{ color: isDark ? "#ccc" : "#444" }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Policy;
