import React from 'react';
const ExploreServices = () => {
    
  const categories = [
    {
      name: "AC Repair Services",
    },
    {
      name: "Appliance Repair",
    },
    {
      name: "Trips & Travels",
    },
    {
      name: "House Shifting",
    },
    {
      name: "Beauty & Salon",
    },
    {
      name: "Car Care Services",
    },
    {
      name: "Cleaning & Pest Control",
    },
    {
      name: "Painting & Renovation",
    },
    {
      name: "Electronics & Gadgets Repair",
    },
    {
      name: "Driver Service",
    },
    {
      name: "Electric & Plumbing",
    },
    {
      name: "Car Rental",
    },
    {
      name: "Men's Care & Salon",
    },
    {
      name: "Emergency Services",
    },
    {
      name: "All Services",
    },
  ];
  return (
    <div className="container mx-auto my-5 py-5">
      <p className="my-3 text-xl font-semibold text-[#6342FD]">
        -Explore Our Services
      </p>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
        {categories.map((c,i) => (
          <div key={i} className="p-4 hover hover:border hover:shadow-xl rounded-xl cursor-pointer">
            <p className="font-semibold">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;
