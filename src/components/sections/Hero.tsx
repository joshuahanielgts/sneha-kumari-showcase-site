
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-4 md:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white">
          Hi, I'm <GradientText>Sneha Kumari</GradientText>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A passionate developer with expertise in both frontend and backend development.
        </p>
        <div className="mt-12">
          <a 
            href="#about" 
            className="flex items-center justify-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background"></div>
      </div>
    </section>
  );
}
