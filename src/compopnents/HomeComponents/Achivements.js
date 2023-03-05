import React from 'react';
import CountUp from "react-countup";

const Achivements = () => {
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto grid grid-cols-3 place-items-center my-5 py-5">
        <div>
          <p className="text-xl md:text-5xl font-semibold text-[#6342FD]">
            <CountUp start={50} end={100} duration={3} />+
          </p>
          <p className="text-xl md:text-xl">
            Service <br /> Providers
          </p>
        </div>
        <div>
          <p className="text-xl md:text-5xl font-semibold text-[#6342FD]">
            <CountUp start={200} end={500} duration={3} />+
          </p>
          <p className="text-xl md:text-xl">
            Order <br /> Served
          </p>
        </div>
        <div>
          <p className="text-xl md:text-5xl font-semibold text-[#6342FD]">
            <CountUp start={500} end={1000} duration={3} />+
          </p>
          <p className="text-xl md:text-xl">
            5 Star <br /> Received
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
