
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Social() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Sneha051188",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sneha-kumari-04b237342",
      icon: Linkedin,
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Connect With Me</h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <link.icon className="w-6 h-6 text-purple-600" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
