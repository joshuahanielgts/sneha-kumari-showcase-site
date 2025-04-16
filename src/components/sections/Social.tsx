
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

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
    {
      name: "Email",
      url: "mailto:contact@snehakumari.com",
      icon: Mail,
    },
  ];

  return (
    <section id="social" className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-white">
            Connect <GradientText>With Me</GradientText>
          </h2>
          <div className="w-20 h-1 gradient-purple mx-auto mb-8"></div>
          
          <Card className="glass-card">
            <CardContent className="py-8">
              <div className="flex justify-center gap-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-secondary/50 hover:bg-purple-900/40 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-6 h-6 text-purple-400" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
