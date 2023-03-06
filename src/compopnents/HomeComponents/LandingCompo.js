import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const LandingCompo = () => {
    return (
        <section className="hero">
          <div className="absolute h-full w-full bg-black opacity-80 overflow-hidden">
            <div className="absolute h-full w-full flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-center text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#6342FD] to-pink-600">
                Your Personal Assistant
              </h1>

              <p className="text-white text-center text-3xl lg:text-6xl font-semibold my-5">
                <Typewriter
                  words={[
                    "One-stop solution for your services",
                    "Order any service, anytime.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
            </div>
          </div>
        </section>
    );
};

export default LandingCompo;