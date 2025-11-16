// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Education/>
      <Contact />
      <Testimonials />
    </main>
  );
}