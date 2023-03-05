import React from 'react';
import {
  FaHeadSideMask,
  FaPhoneAlt,
  FaHandsWash,
  FaHandSparkles,
} from "react-icons/fa";
import supportImg from "../../assests/support.jpg"
const WhyChooseUs = () => {
  return (
    <div className="container mx-auto my-5 py-5">
      <p className="my-3 text-xl font-semibold text-[#6342FD]">
        -WHY CHOOSE US
      </p>
      <p className="text-xl font-semibold">
        Because we care about your safety
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-8 items-center my-10">
        <div className="my-5 grid grid-cols-2 gap-4">
          <div className="p-4 border flex flex-col items-center justify-center gap-2 rounded-xl shadow">
            <FaPhoneAlt className="text-5xl text-[#6342FD]" />
            <p className="font-semibold">
              24/7 <br /> Service
            </p>
          </div>
          <div className="p-4 border flex flex-col items-center justify-center gap-2 rounded-xl shadow">
            <FaHandSparkles className="text-5xl text-[#6342FD]" />
            <p className="font-semibold">
              Ensuring <br /> Gloves
            </p>
          </div>
          <div className="p-4 border flex flex-col items-center justify-center gap-2 rounded-xl shadow">
            <FaHandsWash className="text-5xl text-[#6342FD]" />
            <p className="font-semibold">
              Sanitising Hands <br /> & Equipment
            </p>
          </div>
          <div className="p-4 border flex flex-col items-center justify-center gap-2 rounded-xl shadow">
            <FaHeadSideMask className="text-5xl text-[#6342FD]" />
            <p className="font-semibold">
              Ensuring <br /> Masks
            </p>
          </div>
        </div>
        <div>
          <img src={supportImg} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
