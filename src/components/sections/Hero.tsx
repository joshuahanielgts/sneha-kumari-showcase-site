
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl"
      >
        <div className="inline-block mb-6 p-2 rounded-full border border-purple-500/30 bg-purple-500/10">
          <span className="text-sm text-purple-300">Full-stack Developer</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-white leading-tight">
          Hi, I'm <GradientText>Sneha Kumari</GradientText>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          A passionate developer with expertise in both frontend and backend development,
          creating elegant solutions to complex problems.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <a 
            href="https://github.com/Sneha051188"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="bg-transparent border border-white/20 hover:bg-white/5">
              <Github className="mr-2" />
              GitHub
            </Button>
          </a>
          <a 
            href="https://www.linkedin.com/in/sneha-kumari-04b237342"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="gradient-purple">
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
          </a>
        </div>
        
        <div className="mt-12 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background"></div>
      </div>
    </section>
  );
}
