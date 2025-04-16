
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
          Hi, I'm <GradientText>Sneha Kumari</GradientText>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A passionate developer with expertise in both frontend and backend development.
        </p>
      </motion.div>
    </section>
  );
}
