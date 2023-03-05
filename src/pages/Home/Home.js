import React from "react";
import Achivements from "../../compopnents/HomeComponents/Achivements";
import ClientsReviews from "../../compopnents/HomeComponents/ClientsReviews";
import ExploreServices from "../../compopnents/HomeComponents/ExploreServices";
import Help from "../../compopnents/HomeComponents/Help";
import HowItWorks from "../../compopnents/HomeComponents/HowItWorks";
import LandingCompo from "../../compopnents/HomeComponents/LandingCompo";
import WhyChooseUs from "../../compopnents/HomeComponents/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <LandingCompo />
      <section className="mx-5">
        <ExploreServices />
        <WhyChooseUs />
        <Achivements />
        <HowItWorks />
        <ClientsReviews />
        <Help />
      </section>
    </div>
  );
};

export default Home;
