"use client";
import Header from "@/Components/header";
import Hero from "@/Sections/Hero/Hero";
import AboutMe from "@/Sections/About/AboutMe";
import Latests from "@/Sections/Latests/Latests";
import Testimonial from "@/Sections/Testimonial/Testimonial";
import SectionContact from "@/Components/SectionContact";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Latests />
      <Testimonial />
      <SectionContact />
      <Footer />
    </div>
  );
}
