import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Markets from "@/components/sections/Markets";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <About />
      <Markets />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}
