import React from 'react';
import Lottie from "lottie-react";
import manStepsAnim from "../../anim/step-up.json";

const style = {
  height: 400,
};
const works = [
  {
    name: "Select the Service",
    details:
      "Pick the service you are looking for- from the website or the app.",
  },
  {
    name: "Pick your schedule",
    details:
      "Pick your convenient date and time to avail the service. Pick the service provider based on their rating.",
  },
  {
    name: "Place Your Order & Relax",
    details:
      "Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.",
  },
];
const HowItWorks = () => {
  return (
    <section className="container mx-auto my-5 py-5">
      <div>
        <p className="my-3 text-xl font-semibold text-[#6342FD]">
          -HOW IT WORKS
        </p>
        <p className="text-xl font-semibold">Easiest way to get a service</p>
      </div>
      <div className="md:grid md:grid-cols-2 items-center my-5">
        <div>
          <Lottie animationData={manStepsAnim} style={style} />
        </div>
        <div>
          {works.map((w, i) => (
            <div key={i} className="my-2 shadow-xl p-6 rounded-xl">
              <div className="h-6 w-6 bg-[#6342FD] rounded-full"></div>
              <div>
                <h4 className="text-xl font-semibold">{w.name}</h4>
                <p>{w.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
