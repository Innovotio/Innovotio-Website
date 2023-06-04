import React from "react";
import Image from "next/image";
import microphone from "../assets/programs/microphone.svg";
import buzz from "../assets/programs/buzz.svg";
import light from "../assets/programs/light.svg";
import star from "../assets/programs/star.svg";

const ProgramsHero = () => {
  return (
    <section 
    data-aos="zoom-in-right"
    className="container mx-auto md:px-10 px-5 text-white font-medium xl:pt-24 md:pt-16 pt-16">
      <div className="flex items-center">
        <div>
          <Image
            src={star}
            alt=""
            width={34}
            height={56}
            className="relative top-5 right-4 lg:top-32"
          />

          <h1 className="pt-28 lg:block hidden lg:text-5xl leading-8 text-3xl max-w-4xl">
            Skill Up with our talent building and management programs to stay
            ready for global employment.
          </h1>
          <h3 className="text-3xl max-w-md lg:max-w-md md:max-w-full leading-9 lg:hidden block">
            Put your best foot forward and fast track landing a new tech job
            with innovotio.
          </h3>
        </div>
        <div className="relative top-20 pl-5 justify-between w-full max-w-xs hidden md:flex">
          <Image
           src={microphone} 
           alt="microphone" 
           width={25} 
           height={45} />
          <Image
            src={buzz}
            alt="buzz"
            width={25} 
           height={45}
            className="relative top-12"
          />
          <Image
            src={light}
            alt="light"
            width={50}
            height={41}
            className="relative bottom-8"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
