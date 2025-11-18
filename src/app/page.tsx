// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Blogs from "@/components/Blogs";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import StarsCanvas from "@/components/StarsCanvas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <StarsCanvas />
      <Hero />
      <Blogs />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}