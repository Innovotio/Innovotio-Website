import React from "react";

const Talent = () => {
  return (
    <section className="text-white container mx-auto xl:px-0 px-5 lg:pt-40 pt-16">
      <div>
        <h1 className="md:text-4xl text-3xl">Talent Building Programs</h1>
        <p className="text-base lg:text-xl max-w-3xl text-headerGrey font-light py-5">
          Put your best foot forward and fast track landing a new tech job with
          innovotio.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 max-w-sm lg:max-w-4xl pt-6">
        <button className="lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-black font-medium lg:h-[76px] rounded-full bg-primaryYellow text">
          1 month
        </button>
        <button className="lg:w-[189px] w-[118px] h-[44px] lg:h-[76px] lg:text-2xl text-lg text-white font-medium lg: rounded-full bg-btnHoverBlack text">
          3 months
        </button>
        <button className="lg:w-[189px] w-[118px] h-[44px] lg:h-[76px] lg:text-2xl text-lg text-white font-medium lg: rounded-full bg-btnHoverBlack text">
          6 months
        </button>
        <button className="lg:w-[189px] w-[118px] h-[44px] lg:h-[76px] lg:text-2xl text-lg text-white font-medium lg: rounded-full bg-btnHoverBlack text">
          1 year
        </button>
      </div>
    </section>
  );
};

export default Talent;
