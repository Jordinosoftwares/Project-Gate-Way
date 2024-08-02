import React from "react";

const ServicesBox = ({ service }) => {
  return (
    <div className="bg-[#FEFBFB] rounded text-center shadow-sm shadow-slate-500 p-5 sm:w-[200px] w-full sm:my-0  my-5 mx-5 transition-all hover:scale-[1.2] ">
      {service}
    </div>
  );
};

export default ServicesBox;
