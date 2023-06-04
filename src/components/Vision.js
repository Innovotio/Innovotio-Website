import React from "react";
import { BsPeople, BsPersonWorkspace } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";

const Vision = () => {
  return (
    <section className="text-white md:px-10 px-5 container mx-auto lg:pt-40 pt-16 flex lg:flex-row flex-col lg:items-center justify-between">
      <div className="lg:w-4/12 w-9/12 md:w-full">
        <h1 className="lg:text-4xl lg:mb-0 pb-5 text-3xl font-medium max-w-xs">
          Our Future Training Vision
        </h1>
      </div>
      <div className="text-gray font-light grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <BsPeople className="h-7 w-7 text-white" />
          <p className="md:w-56 py-2">
            Vast & Diverse range of world-class experienced recruiters
          </p>
        </div>
        <div>
          <FaPeopleArrows className="h-7 w-7 text-primaryYellow" />
          <p className="md:w-56 py-2">
            A wide pool of highly skilled talents from around the world.
          </p>
        </div>
        <div>
          <BsPersonWorkspace className="h-7 w-7 text-white" />
          <p className="md:w-56 py-2">
            An extensive and diverse team of exceptional professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
