import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MenuSection } from "@/components/sections/menu-section";
import { SpecialSection } from "@/components/sections/special-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <SpecialSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
