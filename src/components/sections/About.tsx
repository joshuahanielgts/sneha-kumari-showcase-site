
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 bg-purple-50/50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm deeply passionate about creating robust and elegant solutions through code. 
            My interests span across both backend and frontend programming, allowing me to build 
            comprehensive full-stack applications. With a strong academic background and a keen eye 
            for detail, I strive to write clean, efficient, and maintainable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
