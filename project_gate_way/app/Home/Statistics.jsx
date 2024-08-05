"use client";

import { useState, useEffect, useRef } from "react";

const Statistics = () => {
  const counterRef = useRef(null);
  const counts = document.querySelectorAll(".count");
  const speed = 97;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Intersecting");
        observer.unobserve(counterRef.current);
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  counts.forEach((counter) => {
    function upDate() {
      const target = Number(counter.getAttribute("data-target"));
      const count = Number(counter.innerText);
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.floor(inc + count);
        setTimeout(upDate, 15);
      } else {
        counter.innerText = target;
      }
    }
    upDate();
  });

  return (
    <section className="relative h-[70vh]" ref={counterRef}>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat stats_img">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white  bg-opacity-70 px-4">
          <p className="text-center" data-aos="fade-up">
            <span className="font-semibold sm:text-5xl text-3xl">
              What we have achieved so far
            </span>
            <br />
            <span className="sm:text-3xl text-2xl">
              We are still looking ahead as there are better days ahead.
            </span>
          </p>

          <section id="statistics" className="w-full" data-aos="fade-up">
            <div className="flex flex-wrap items-baseline justify-evenly  my-10">
              <div className="text-center sm:w-fit w-28">
                <p
                  className="text-4xl font-bold count-up orange_color sm:mt-0 mt-5 count"
                  data-target="1254"
                >
                  00
                </p>
                <h2 className="sm:text-3xl text-1xl">Client</h2>
              </div>
              <div className="text-center  sm:w-fit w-28">
                <p
                  className="text-4xl font-bold count-up orange_color sm:mt-0 mt-5 count"
                  data-target="12168"
                >
                  00
                </p>
                <h2 className="sm:text-3xl text-1xl">Project</h2>
              </div>
              <div className="text-center  sm:w-fit w-28">
                <p
                  className="text-4xl font-bold count-up orange_color sm:mt-0 mt-5 count"
                  data-target="2172"
                >
                  00
                </p>
                <h2 className="sm:text-3xl text-1xl">Hours of Support</h2>
              </div>
              <div className="text-center  sm:w-fit w-28">
                <p
                  className="text-4xl font-bold count-up orange_color sm:mt-0 mt-5 count"
                  data-target="732"
                >
                  00
                </p>
                <h2 className="sm:text-3xl text-1xl">Hard Workers</h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
