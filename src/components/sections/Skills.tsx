
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Jest", "AWS", "CI/CD", "Agile Methodology"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-white">
            My <GradientText>Skills</GradientText>
          </h2>
          <div className="w-20 h-1 gradient-purple mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-center text-white mb-6 pb-3 border-b border-white/10">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-secondary/50 text-purple-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
