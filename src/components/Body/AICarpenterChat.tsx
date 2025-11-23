import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer,
  X,
  Send,
  Sparkles,
  Clock,
  Package,
  Shield,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { Typewriter } from "react-simple-typewriter";

const predefinedFAQs = [
  { q: "When is Clonekraft launching?", icon: Clock },
  { q: "How does the cloning work?", icon: Hammer },
  { q: "Is my photo safe?", icon: Shield },
  { q: "How long until delivery?", icon: Package },
];

const faqAnswers: Record<string, string> = {
  "When is Clonekraft launching?":
    "We’re launching in early 2026. First 500 waitlist members get their first piece cloned for free.",
  "How does the cloning work?":
    "Upload one photo → AI analyzes every detail → master carpenters hand-build it in premium hardwood → delivered fully assembled in 14 days.",
  "Is my photo safe?":
    "100%. We never store, share, or train AI on your photos. Deleted 7 days after delivery.",
  "How long until delivery?":
    "14 days from order. White-glove delivery, fully assembled.",
};

interface Message {
  text: string;
  isBot: boolean;
}

export default function AICarpenterChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [showFAQs, setShowFAQs] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bronze = "#C1A170";

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showFAQs]);

  // OPENING BOT MESSAGE
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        sendBotReply("Your AI Carpenter is waking up...");
      }, 600);
    }
    if (!isOpen) {
      setMessages([]);
      setRequestCount(0);
      setShowFAQs(false);
    }
  }, [isOpen]);

  // BOT TYPEWRITER HANDLER
  const sendBotReply = (text: string) => {
    setIsTyping(true);

    // Show FAQs when the bot types the special message
    const shouldShowFAQs = text.includes(
      "I'm still sharpening my tools... Launching soon. In the meantime, feel free to explore the FAQs below!"
    );

    // Set showFAQs state BEFORE adding the message to ensure a clean scroll after typing
    if (shouldShowFAQs) {
      setShowFAQs(true);
    } else {
      // Only hide them if a message explicitly tells them to hide (e.g., initial reply)
      // For FAQ responses, we rely on the handleFAQ logic or user input to control visibility.
    }

    setMessages((prev) => [...prev, { text, isBot: true }]);

    setTimeout(() => setIsTyping(false), 2000);
  };

  // USER SENDING MESSAGE
  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    // Hide FAQs on a new user message
    setShowFAQs(false);

    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setInput("");
    setRequestCount((prev) => prev + 1);

    setTimeout(() => {
      if (requestCount >= 4) {
        sendBotReply(
          "The workshop is buzzing... Your AI Carpenter is coming very soon. Stay tuned — something legendary is being built."
        );
      } else {
        sendBotReply(
          "I'm still sharpening my tools... Launching soon. In the meantime, feel free to explore the FAQs below!"
        );
      }
    }, 600);
  };

  // FAQ CLICK HANDLER
  const handleFAQ = (question: string) => {
    if (isTyping) return;

    // *** FIX APPLIED HERE: We remove setShowFAQs(false) to keep the list visible. ***
    // The list stays visible until the user types a new question (handled in handleSend).
    // setShowFAQs(false);

    setMessages((prev) => [...prev, { text: question, isBot: false }]);

    setTimeout(() => {
      sendBotReply(
        faqAnswers[question] ||
          "We're still carving that answer. Launching soon — stay tuned."
      );
    }, 400);
  };

  return (
    <>
      {/* DARK OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-2xl border"
        style={{
          background: `linear-gradient(135deg, ${bronze}, #d4ad7b)`,
          borderColor: bronze + "40",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={32} className="text-black" />
        ) : (
          <Hammer size={32} className="text-black" />
        )}
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-28 right-8 w-96 h-[600px] z-50 rounded-3xl shadow-3xl overflow-hidden border flex flex-col"
            style={{
              background: isDark ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderColor: bronze + "40",
            }}
          >
            {/* HEADER */}
            <div
              className="p-6 border-b flex-shrink-0"
              style={{ borderColor: bronze + "30", background: bronze + "15" }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-black/20">
                  <Hammer size={28} style={{ color: bronze }} />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: isDark ? "#fff" : "#000" }}
                  >
                    AI Carpenter
                  </h3>
                  <p className="text-sm" style={{ color: bronze }}>
                    Coming soon...
                  </p>
                </div>
              </div>
            </div>

            {/* MESSAGES (Scrollable Area) */}
            <div className="flex-1 pt-6 px-6 overflow-y-auto">
              {messages.length === 0 && (
                <div className="text-center mt-20">
                  <Sparkles
                    size={48}
                    style={{ color: bronze }}
                    className="mx-auto mb-4 opacity-50"
                  />
                  <p
                    className="text-lg"
                    style={{ color: isDark ? "#ccc" : "#444" }}
                  >
                    Ask me anything about Clonekraft...
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${msg.isBot ? "text-left" : "text-right"}`}
                >
                  <div
                    className={`inline-block max-w-xs px-5 py-3 rounded-2xl ${
                      msg.isBot
                        ? isDark
                          ? "bg-white/10"
                          : "bg-black/5"
                        : "bg-gradient-to-r from-bronze to-[#d4ad7b] text-black"
                    }`}
                    style={
                      !msg.isBot
                        ? {
                            background: `linear-gradient(135deg, ${bronze}, #d4ad7b)`,
                          }
                        : {}
                    }
                  >
                    {msg.isBot ? (
                      <Typewriter
                        words={[msg.text]}
                        loop={1}
                        typeSpeed={35}
                        deleteSpeed={0}
                        delaySpeed={300}
                        cursor={false}
                      />
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}

              {/* BOT IS TYPING */}
              {isTyping && (
                <div className="flex gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{ backgroundColor: bronze }}
                  />
                  <div
                    className="w-2 h-2 rounded-full animate-bounce delay-150"
                    style={{ backgroundColor: bronze }}
                  />
                  <div
                    className="w-2 h-2 rounded-full animate-bounce delay-300"
                    style={{ backgroundColor: bronze }}
                  />
                </div>
              )}

              {/* FAQ SECTION (Now persistent after clicking) */}
              {showFAQs && (
                <div className="mt-4 mb-4">
                  <p
                    className="text-sm mb-3 opacity-70"
                    style={{ color: isDark ? "#ddd" : "#333" }}
                  >
                    Quick questions:
                  </p>

                  <div className="space-y-2">
                    {predefinedFAQs.map((faq, i) => (
                      <button
                        key={i}
                        onClick={() => handleFAQ(faq.q)}
                        disabled={isTyping}
                        className="w-full text-left p-4 rounded-2xl border backdrop-blur-xl transition-all hover:scale-[1.01] flex items-center justify-between"
                        style={{
                          background: isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.03)",
                          borderColor: bronze + "30",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <faq.icon size={18} style={{ color: bronze }} />
                          <span style={{ color: isDark ? "#ddd" : "#333" }}>
                            {faq.q}
                          </span>
                        </div>
                        <ChevronRight
                          size={18}
                          className="transition-transform"
                          style={{ color: bronze }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pb-4" ref={messagesEndRef} />
            </div>

            {/* INPUT BOX */}
            <div
              className="p-6 border-t flex-shrink-0"
              style={{ borderColor: bronze + "30" }}
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask the carpenter..."
                  className="flex-1 px-5 py-4 rounded-2xl border outline-none"
                  disabled={isTyping}
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.03)",
                    borderColor: bronze + "40",
                    color: isDark ? "#fff" : "#000",
                  }}
                />
                <button
                  onClick={handleSend}
                  className="p-4 rounded-2xl"
                  style={{ background: bronze }}
                  disabled={isTyping || !input.trim()}
                >
                  <Send size={20} className="text-black" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
