"use client";
import HomePage from "./Home/page";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <HomePage />
    </section>
  );
};

export default Home;
