import Header from "@/Components/Header";
import Hero from "@/Sections/Hero/Hero";
import AboutMe from "@/Sections/About/AboutMe";
import Latests from "@/Sections/Latests/Latests";
import Testimonial from "@/Sections/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Latests />
      <Testimonial />
    </div>
  );
}
