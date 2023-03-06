import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../appContext/ContextProvider";
import Loader from "../Loader/Loader";
import { AiOutlineBlock } from "react-icons/ai";

const ExploreServices = () => {
  const [categories, setCategories] = useState([]);
  const { loading, isLoading } = useContext(AppContext);
  const url = "http://localhost:5000/sercives"
  useEffect(() => {
    isLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCategories(res.data);
        isLoading(false);
      })
      .catch((e) => console.log(e));
  }, [isLoading]);
  // const categories = [
  //   {
  //     name: "AC Repair Services",
  //   },
  //   {
  //     name: "Appliance Repair",
  //   },
  //   {
  //     name: "Trips & Travels",
  //   },
  //   {
  //     name: "House Shifting",
  //   },
  //   {
  //     name: "Beauty & Salon",
  //   },
  //   {
  //     name: "Car Care Services",
  //   },
  //   {
  //     name: "Cleaning & Pest Control",
  //   },
  //   {
  //     name: "Painting & Renovation",
  //   },
  //   {
  //     name: "Electronics & Gadgets Repair",
  //   },
  //   {
  //     name: "Driver Service",
  //   },
  //   {
  //     name: "Electric & Plumbing",
  //   },
  //   {
  //     name: "Car Rental",
  //   },
  //   {
  //     name: "Men's Care & Salon",
  //   },
  //   {
  //     name: "Emergency Services",
  //   },
  //   {
  //     name: "All Services",
  //   },
  // ];
  return (
    <div className="container mx-auto my-5 py-5">
      <p className="my-3 text-xl font-semibold text-[#6342FD]">
        -Explore Our Services
      </p>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
          {categories?.map((c, i) => (
            <Link
              to={`services/${c.name}`}
              key={i}
              className="flex gap-4 p-4 border hover:shadow-xl rounded-xl cursor-pointer"
            >
              <AiOutlineBlock className="text-3xl text-[#6342FD]"/>
              <p className="font-semibold">{c.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreServices;
