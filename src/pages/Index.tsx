
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Academic } from "@/components/sections/Academic";
import { Social } from "@/components/sections/Social";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Academic />
      <Social />
      <Contact />
    </main>
  );
};

export default Index;

