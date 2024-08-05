import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="pt-32 pb-32 px-10" id="about">
      <div className="">
        <p className="text-center text-[#2457C5] blur-sm text-7xl  uppercase">
          About
        </p>
        <p className="text-center text-[#2457C5] text-3xl font-bold uppercase transform">
          About
        </p>
      </div>

      <div
        className="grid sm:grid-cols-2 grid-cols-1 sm:place-items-end sm:content-center"
        id=""
      >
        <div
          className="flex flex-col justify-evenly h-80 sm:mb-0 mb-5"
          data-aos="fade-right"
        >
          <h2 className="flex items-center blue_color text-2xl font-bold uppercase">
            <Image
              className="mr-2"
              src="/images/info.svg"
              width={40}
              height={40}
              alt="info-img"
            />
            a<span className="border-b border-[#797272] mr-2">bout</span> us
          </h2>
          <span className="sm:border-r sm:border-[#797272] sm:pr-10">
            <p>
              This product is sponsored by TECHRITOMA INC. TECHRITOMA stands for
              Technology for Recovery Investments,Taking Operative Actions for
              Massive Avail. TECHRITOMA Inc is a multipurpose technology based
              company with head office in Buea Cameroon and Nairobi Kenya.
            </p>
          </span>

          <p className="flex gap-5 font-bold">
            For more inforation
            <button className="blue_background hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
              <Link href="#" className="flex gap-1 items-center">
                Visit{" "}
                <Image
                  src="/images/arrow-right.svg"
                  width={20}
                  height={20}
                  alt="arrow-img"
                />
              </Link>
            </button>
          </p>
        </div>
        <div
          className="flex flex-col justify-evenly h-80 sm:pl-5 sm:mb-0 mb-20"
          data-aos="fade-left"
        >
          <h2 className="blue_color font-bold">Why you should choose us</h2>
          <p className="">
            With the ever growing competition we set to offer the following
            services
          </p>
          <ul className="list_tick">
            <li>
              We write your complete project and work on all corrections
              requested by your supervisor.
            </li>
            <li>
              We assist you with any part or chapter of your work you are facing
              difficulties with.
            </li>
            <li>
              Fast data analysis and interpretation of results for your project.
            </li>
            <li>
              We come out with your questionnaire based on your research
              objectives.
            </li>
          </ul>
          <button className="blue_background hover:bg-blue-700 text-white font-bold py-2 px-20 mx-auto my-5 rounded-2xl w-56">
            <Link href="#" className="uppercase">
              hire us
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
