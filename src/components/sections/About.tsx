
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-white">
            About <GradientText>Me</GradientText>
          </h2>
          <div className="w-20 h-1 gradient-purple mx-auto mb-8"></div>
          
          <Card className="glass-card">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm deeply passionate about creating robust and elegant solutions through code. 
                My interests span across both backend and frontend programming, allowing me to build 
                comprehensive full-stack applications. With a strong academic background and a keen eye 
                for detail, I strive to write clean, efficient, and maintainable code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                My approach to development combines technical excellence with creative problem-solving.
                I enjoy collaborating with teams to build innovative applications that deliver
                exceptional user experiences while maintaining robust backend architectures.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
