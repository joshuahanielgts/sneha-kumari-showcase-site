
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Sneha051188/portfolio",
    image: "/placeholder.svg",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, and payment integration.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    githubUrl: "https://github.com/Sneha051188/ecommerce",
    liveUrl: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Redux"],
    githubUrl: "https://github.com/Sneha051188/taskapp",
    image: "/placeholder.svg",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-white">
            My <GradientText>Projects</GradientText>
          </h2>
          <div className="w-20 h-1 gradient-purple mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full flex flex-col">
                <div className="h-40 bg-secondary/50 rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-secondary/70 text-purple-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto justify-end">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-purple-900/40 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5 text-purple-400" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-purple-900/40 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-purple-400" />
                      </a>
                    )}
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
