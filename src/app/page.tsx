import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Process />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </>
  );
}