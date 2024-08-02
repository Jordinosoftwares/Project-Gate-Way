"use client";

import { useState, useEffect, useRef } from "react";

const Statistics = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const countUpRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          console.log("Intersecting");
          observer.disconnect(); // Stop observing after first intersection

          // Trigger count-up animations for each element
          countUpRefs.current.forEach((ref, index) => {
            if (ref.current) {
              // Check if ref.current exists
              handleCountUp(ref, [100, 250, 500, 300][index]); // Example end values
            }
          });
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionRef]);

  const handleCountUp = (ref, endValue) => {
    let count = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = () => {
      if (!ref.current) return; // Early return if ref.current is null

      const now = performance.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * endValue);

      ref.current.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };
  return (
    <section>
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat stats_img">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white  bg-opacity-70">
            <p className="text-center ">
              <span className="font-semibold sm:text-5xl text-3xl">
                What we have achieved so far
              </span>
              <br />
              <span className="sm:text-3xl text-2xl">
                We are still looking ahead as there are better days ahead.
              </span>
            </p>

            <section id="statistics" ref={sectionRef} className="w-full">
              <div className="flex flex-wrap items-baseline justify-evenly  my-10">
                <div className="text-center sm:w-fit w-28">
                  <p
                    ref={(el) => (countUpRefs.current[0] = el)}
                    className="text-4xl font-bold count-up orange_color"
                  >
                    00
                  </p>
                  <h2 className="sm:text-3xl text-1xl">Client</h2>
                </div>
                <div className="text-center  sm:w-fit w-28">
                  <p
                    ref={(el) => (countUpRefs.current[1] = el)}
                    className="text-4xl font-bold count-up orange_color"
                  >
                    00
                  </p>
                  <h2 className="sm:text-3xl text-1xl">Project</h2>
                </div>
                <div className="text-center  sm:w-fit w-28">
                  <p
                    ref={(el) => (countUpRefs.current[2] = el)}
                    className="text-4xl font-bold count-up orange_color"
                  >
                    00
                  </p>
                  <h2 className="sm:text-3xl text-1xl">Hours of Support</h2>
                </div>
                <div className="text-center  sm:w-fit w-28">
                  <p
                    ref={(el) => (countUpRefs.current[3] = el)}
                    className="text-4xl font-bold count-up orange_color"
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
    </section>
  );
};

export default Statistics;
