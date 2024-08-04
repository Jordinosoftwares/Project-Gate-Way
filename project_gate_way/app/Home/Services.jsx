import Link from "next/link";

import serviceArray from "@app/constants";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="py-32 px-10" id="services" data-aos="zoom-in-down">
      <div className="">
        <p className="text-center text-[#2457C5] blur-sm text-7xl  uppercase">
          Services
        </p>
        <p className="text-center text-[#2457C5] text-3xl font-bold uppercase transform">
          Services
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {serviceArray.map((service) => (
          <ServicesBox key={service.id} service={service.service} />
        ))}
      </div>
      <button className="flex blue_background hover:bg-blue-700 text-white font-bold  py-2 px-20 mx-auto  my-5 rounded-2xl w-56">
        <Link href="#" className="uppercase">
          hire us
        </Link>
      </button>
    </section>
  );
};

export default Services;
