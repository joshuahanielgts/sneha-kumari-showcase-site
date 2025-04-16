
import { motion } from "framer-motion";

export function Academic() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Academic Excellence</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/50">
            <p className="text-6xl font-bold text-purple-600 mb-4">9.8</p>
            <p className="text-xl text-gray-600">CGPA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
