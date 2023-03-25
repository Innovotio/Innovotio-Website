import React from "react";
import Image from "next/image";
import Resume from "./../assets/description/Resume.png"
import Innovation from "./../assets/description/Innovation.png"
import DollarCoin from "./../assets/description/DollarCoin.png"
import People from "./../assets/description/People.png"
import Lawyer from "./../assets/description/Lawyer.png"
import UserShield from "./../assets/description/UserShield.png"
import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/yellowBtn";
import Talent from "./Custom/Talent";

const Description = () => {
  return (
    <>
      <div className="">
        <div className="mx-auto container pt-24 lg:pt-48 flex lg:flex-row justify-center lg:items-center lg:justify-between text-center flex-col">
          <div className="flex flex-col lg:w-4/12">
              <p className="font-medium lg:text-5xl text-3xl text-white">
                How is Innovotio Talent Unique?
              </p>
              <p className="lg:w-11/12 lg:text-lg text-lg lg:text-headerGrey lg:pb-8 py-8">
                Innovotio provides more than just the plumbing for your revenue.
                As a merchant of record, we do it for you:
              </p>
            <div className=" lg:flex flex justify-between lg:flex-row lg:gap-6">
             <BlackBtn text="Join Innovotio"/>
            <YellowBtn text="Experience us"/>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10 lg:gap-0  lg:w-7/12 justify-between pt-14">
            <div className="lg:font-normal lg:w-6/12 leading-8 lg:text-base lg:text-white lg:text-left ">
              <Talent image={Resume} text="Extensive & Fast Hiring of talents between 24-48 Hours"/>
              <Talent image={Innovation} text="Handle all billing-related support queries for you"/>
              <Talent image={DollarCoin} text="Extensive & Fast Hiring of talents between 24-48 Hours"/>
            </div>
            <div className="lg:font-normal lg:w-6/12 lg:text-base leading-8 lg:text-white lg:text-left ">
            <Talent image={People} text="We find, manage & keep training only the best talents"/>
            <Talent image={Lawyer} text="Easy access world class tech talent for Full-Time, Remote or Hybrid Roles"/>
            <Talent image={UserShield} text="Proper vetting of numerous applications to find the finest talent for our clients"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
