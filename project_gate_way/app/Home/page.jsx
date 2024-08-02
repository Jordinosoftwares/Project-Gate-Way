import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";

const HomePage = () => {
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

export default HomePage;
