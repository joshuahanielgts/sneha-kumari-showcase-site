
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Academic() {
  return (
    <section id="academic" className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-white">Academic Excellence</h2>
          <div className="w-20 h-1 gradient-purple mx-auto mb-8"></div>
          
          <Card className="glass-card">
            <CardContent className="pt-6 pb-8">
              <p className="text-6xl font-bold mb-4 text-transparent bg-clip-text gradient-purple">9.8</p>
              <p className="text-xl text-gray-300">CGPA</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
