import React from 'react';
import Lottie from "lottie-react";
import customerCare from "../../anim/customer-care.json";

const style = {
  height: 200,
};

const Help = () => {
  return (
    <div className="container mx-auto my-5 py-5 shadow-xl p-8 border md:grid md:grid-cols-2 items-center">
      <div>
        <Lottie animationData={customerCare} style={style} />
      </div>
      <div>
        <p className="text-xl font-semibold">
          Can’t find your desired service? <br /> Let us know 24/7 in 16516.
          16516
        </p>
        <div className="my-5 flex">
          <button className="px-4 py-2 text-white font-semibold bg-[#6342FD] w-48 hover:bg-transparent hover:border hover:text-black">
            Request a service
          </button>
          <button className="px-4 py-2 ml-5 w-48 font-semibold border hover:bg-[#6342FD] hover:text-white">
            224336
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
