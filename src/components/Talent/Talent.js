import React from "react";
import Program from "./Program";
import creative from "../../assets/programs/creative.svg";
import three from "../../assets/programs/3.svg";
import six from "../../assets/programs/6.svg";
import one from "../../assets/programs/1.svg";

const Talent = () => {
  const [options, setOptions] = React.useState({
    month: 1,
  });
  const handleOptions = (value) => {
    setOptions({ ...options, month: value });
  };

  return (
    <section className="text-white container mx-auto md:px-10 px-5 lg:pt-40 pt-16">
      <div>
        <h1 className="md:text-4xl text-3xl">Talent Building Programs</h1>
        <p className="text-base lg:text-xl max-w-3xl text-headerGrey font-light py-5">
          Put your best foot forward and fast track landing a new tech job with
          innovotio.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 max-w-sm md:max-w-full lg:max-w-4xl pt-6">
        <button
          onClick={() => handleOptions(1)}
          className={options.month === 1 ?"bg-primaryYellow lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-black font-medium lg:h-[76px] rounded-full text" : "lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-white font-medium lg:h-[76px] rounded-full bg-btnHoverBlack text"}
        >
          1 month
        </button>
        <button
          onClick={() => handleOptions(3)}
          className={options.month === 3 ?"bg-primaryYellow lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-black font-medium lg:h-[76px] rounded-full text" : "lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-white font-medium lg:h-[76px] rounded-full bg-btnHoverBlack text"}
        >
          3 months
        </button>
        <button
          onClick={() => handleOptions(6)}
          className={options.month === 6 ?"bg-primaryYellow lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-black font-medium lg:h-[76px] rounded-full text" : "lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-white font-medium lg:h-[76px] rounded-full bg-btnHoverBlack text"}
        >
          6 months
        </button>
        <button
          onClick={() => handleOptions(12)}
          className={options.month === 12 ?"bg-primaryYellow lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-black font-medium lg:h-[76px] rounded-full text" : "lg:w-[189px] w-[118px] h-[44px] text-lg lg:text-2xl text-white font-medium lg:h-[76px] rounded-full bg-btnHoverBlack text"}
        >
          1 year
        </button>
      </div>
      <div>
        {options.month === 1 ? (
          <Program timeFrame={1} image={creative} quater="month" />
        ) : options.month === 3 ?  (
          <Program timeFrame={3} image={three} quater="months"/>
        ) : options.month === 6 ? (
          <Program timeFrame={6} image={six} quater="months"/>
        ) : options.month === 12 ? (
          <Program timeFrame={1} image={one} quater="year"/>
        ) : null}
      </div>
    </section>
  );
};

export default Talent;
