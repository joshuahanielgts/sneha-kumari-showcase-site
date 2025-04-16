
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Academic } from "@/components/sections/Academic";
import { Social } from "@/components/sections/Social";

const Index = () => {
  return (
    <main className="bg-gradient-to-b from-white to-purple-50">
      <Hero />
      <About />
      <Academic />
      <Social />
    </main>
  );
};

export default Index;
