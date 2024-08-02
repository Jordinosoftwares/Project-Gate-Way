import React from "react";
import Link from "next/link";

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
          className="flex flex-col justify-evenly h-80"
          data-aos="zoom-in-up"
        >
          <h2 className="blue_color text-2xl font-bold uppercase">about us</h2>
          <p>
            This product is sponsored by TECHRITOMA INC. TECHRITOMA stands for
            Technology for Recovery Investments,Taking Operative Actions for
            Massive Avail. TECHRITOMA Inc is a multipurpose technology based
            company with head office in Buea Cameroon and Nairobi Kenya.
          </p>

          <p className="flex gap-5 font-bold">
            For more inforation
            <button className="blue_background hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
              <Link href="#">Visit</Link>
            </button>
          </p>
        </div>
        <div className="flex flex-col justify-evenly h-80">
          <h2 className="blue_color font-bold">Why you should choose us</h2>
          <p className="">
            With the ever growing competition we set to offer an
          </p>
          <ul className="list_tick">
            <li>On time product delivery</li>
            <li>On time product delivery</li>
            <li>On time product delivery</li>
            <li>On time product delivery</li>
          </ul>
          <button className="blue_background hover:bg-blue-700 text-white font-bold py-1 px-20 mx-auto rounded-2xl w-56">
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
