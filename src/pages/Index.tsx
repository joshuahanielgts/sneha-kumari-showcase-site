
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Academic } from "@/components/sections/Academic";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Social } from "@/components/sections/Social";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Academic />
      <Projects />
      <Social />
      <Contact />
    </main>
  );
};

export default Index;
