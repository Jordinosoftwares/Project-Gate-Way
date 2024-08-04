"use client";
import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import Image from "next/image";

const Testimonial = () => {
  let slides = [
    {
      id: 1,
      profile: "/images/profile.jpg",
      name: "Elame Jordan",
      proffesion: "Front-end Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet eros est, nec consequat justo semper a. Suspendisse dapibus ultrices quam, volutpat feugiat sapien tempor sed. Integer in erat orci. Maecenas sodales orci ac massa consequat pulvinar. ",
    },
    {
      id: 2,
      profile: "/images/profile.jpg",
      name: "Meli Anael",
      proffesion: "Back-end Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet eros est, nec consequat justo semper a. Suspendisse dapibus ultrices quam, volutpat feugiat sapien tempor sed. Integer in erat orci. Maecenas sodales orci ac massa consequat pulvinar. ",
    },
    {
      id: 3,
      profile: "/images/profile.jpg",
      name: "Delaney",
      proffesion: "Full Stack Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet eros est, nec consequat justo semper a. Suspendisse dapibus ultrices quam, volutpat feugiat sapien tempor sed. Integer in erat orci. Maecenas sodales orci ac massa consequat pulvinar. ",
    },
    {
      id: 4,
      profile: "/images/profile.jpg",
      name: "Ismael",
      proffesion: "Mobile app Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet eros est, nec consequat justo semper a. Suspendisse dapibus ultrices quam, volutpat feugiat sapien tempor sed. Integer in erat orci. Maecenas sodales orci ac massa consequat pulvinar. ",
    },
  ];

  let [current, setCurrent] = useState(0);
  let autoSlideInterval;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Interval Time

    return () => clearInterval(interval);
  }, [current]);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <section className="relative sm:h-screen h-[50vh] my-32" data-aos="zoom-in">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat test_img">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5  bg-black text-white  bg-opacity-70">
          <div className=" sm:w-1/2 h-full flex sm:items-center justify-center">
            <div
              key={slides[current].id} // Use current slide ID for key
              className={`flex flex-col items-center mx-auto w-full h-fit sm:px-0 px-5 ${"opacity-100"} // Always visible
              `}
              style={{ transition: "opacity 0.3s ease-in-out" }}
            >
              <Image
                src={slides[current].profile}
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full mb-2"
              />
              <p className="font-bold sm:text-2xl">{slides[current].name}</p>
              <p className="mb-10">{slides[current].proffesion}</p>
              <p className="">{slides[current].testimonial}</p>
            </div>
          </div>

          <div className="absolute top-0 h-full w-full flex justify-between items-center text-dark px-10 text-3xl">
            <button onClick={previousSlide} aria-label="Previous Slide">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide} aria-label="Next Slide">
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((_, i) => (
              <div
                key={"indicator" + i}
                className={`rounded-full w-5 h-5 cursor-pointer ${
                  i === current ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
