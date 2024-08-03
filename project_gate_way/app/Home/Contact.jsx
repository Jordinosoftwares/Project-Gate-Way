import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-32 px-10" id="contactus">
      <div className="">
        <p className="text-center text-[#2457C5] blur-sm text-7xl  uppercase">
          Contact Us
        </p>
        <p className="text-center text-[#2457C5] text-3xl font-bold uppercase transform">
          Contact Us
        </p>
      </div>

      <p className="text-[#433F3F] text-center text-2xl font-normal mb-10">
        Our support team is Available 24/7 in 365. Speed is our passion
      </p>

      <form className="flex flex-col gap-20 shadow-sm shadow-slate-500 rounded-xl overflow-hidden">
        <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-5 sm:text-justify text-center items-center justify-evenly bg-[#FEFBFB] py-10">
          <div className="sm:text-justify text-center">
            <h2 className="flex gap-1 text-center mb-2 font-bold text-2xl">
              <Image
                src="/images/location.svg"
                width={40}
                height={40}
                alt="location-img"
              />
              Location:
            </h2>
            <p>Molyk-Buea</p>
            <p>South West Region,</p>
            <p>Cameroon</p>
          </div>

          <div className="sm:text-justify text-center">
            <h2 className="flex gap-1 items-center mb-2 font-bold text-2xl">
              <Image
                src="/images/email.svg"
                width={40}
                height={40}
                alt="email-img"
              />
              Email:
            </h2>
            <p>techritoma@gmail.com</p>
          </div>

          <div className="sm:text-justify text-center">
            <h2 className="flex gap-1 items-center mb-2 font-bold text-2xl">
              <Image
                src="/images/phone.svg"
                width={40}
                height={40}
                alt="phone-img"
              />
              Call:
            </h2>
            <p>+237 682-866-576</p>
            <p>+237 679-495-102</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 pb-10 px-10">
          <div className="flex gap-6 w-full justify-center">
            <input
              type="text"
              required
              className="border border-solid border-[#585555] p-3 rounded-lg w-1/2 text-[#585555]"
              value="Enter name:"
            />
            <input
              type="email"
              required
              className="border border-solid border-[#585555] p-3 rounded-lg w-1/2 text-[#585555]"
              value="Enter email:"
            />
          </div>
          <input
            type="text"
            required
            className="border border-solid border-[#585555] p-3 rounded-lg text-[#585555]"
            value="Enter phone number:"
          />
          <input
            type="text"
            required
            className="border border-solid border-[#585555] p-3 rounded-lg text-[#585555]"
            value="Subject:"
          />

          <textarea
            cols="30"
            rows="10"
            required
            className="border border-solid border-[#585555] p-3 rounded-lg text-[#585555]"
            value="Message:"
          ></textarea>
          <button
            typpe="submit"
            className="flex blue_background hover:bg-blue-700 text-white font-bold py-2 px-14 mx-auto rounded-2xl w-56 uppercase"
          >
            Contact Us
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
