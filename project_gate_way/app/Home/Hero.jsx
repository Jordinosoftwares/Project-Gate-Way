import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative sm:h-screen h-[50vh]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero_img">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 sm:pt-0 pt-20  bg-black text-white  bg-opacity-70 ">
          <p
            className="font-semibold sm:text-5xl text-3xl text-center uppercase"
            data-aos="zoom-in"
          >
            welcome to <spnan className="blue_color"> project </spnan>
            <span className="orange_color">gateway</span>
          </p>

          <button
            className="blue_background hover:bg-blue-700 text-white font-semibold py-4 px-20 rounded-2xl"
            data-aos="zoom-in"
          >
            <Link href="#" className="uppercase">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
