import React from 'react';
import Lottie from "lottie-react";
import jobAnim from "../../anim/job-proposal-review-animation.json";
import { GrBlockQuote } from "react-icons/gr";

const style = {
  height: 400,
};

const reviews = [
  {
    name: "Nashed Shah Roni",
    image: "https://nsrarvi-devzone.xyz/images/nsr-pp.jpg",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    profession: "Enginner",
    institute: "NATSTECH",
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    name: "Nur Mohammad Kawser",
    image:
      "https://pbs.twimg.com/profile_images/1354385324659462144/rzGJ6Pqt_400x400.jpg",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    profession: "Enginner",
    institute: "NATSTECH",
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    name: "Rowan Mr Bean",
    image:
      "https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    profession: "Enginner",
    institute: "NATSTECH",
    prev: 2,
    id: 3,
    next: 1,
  },
];

const ClientsReviews = () => {
  return (
    <section className="container mx-auto my-5 py-5">
      <div>
        <p className="my-3 text-xl font-semibold text-[#6342FD]">
          -SOME HAPPY FACES
        </p>
        <p className="text-xl font-semibold">
          Real Happy Customers, Real Stories
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 items-center">
        <div className="carousel w-full my-5 py-5">
          {reviews.map((r, i) => (
            <div
              id={`slide${r.id}`}
              key={i}
              className="carousel-item relative w-full"
            >
              <div className="grid grid-cols-2 gap-4 items-center border-y-4 p-8 border-violet-500">
                <div>
                  <GrBlockQuote className="text-5xl text-violet-600" />
                  <p className="my-3 text-sm md:text-base text-justify">
                    {r.details}
                  </p>
                  <p className="font-semibold text-violet-500">{r.name}</p>
                  <p className="font-semibold text-violet-500">
                    {r.profession}
                  </p>
                  <p className="font-semibold text-violet-500">{r.institute}</p>
                </div>
                <div>
                  <img src={r.image} className="rounded-xl" alt="" />
                </div>
              </div>
              <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${r.prev}`} className="btn btn-circle">
                  ❮
                </a>
                <a
                  href={`#slide${r.next}`}
                  className="btn btn-circle bg-violet-600 border-0"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Lottie animationData={jobAnim} style={style} />
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
