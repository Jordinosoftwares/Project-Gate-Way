import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";

const page = () => {
  return (
    <section>
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Testimonial />
      <Contact />
    </section>
  );
};

export default page;
