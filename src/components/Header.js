import React from "react";
import Button from "./Custom/Button";
import Image from "next/image";
import Apple from "./../assets/header/AppleDesc.png"
import Facebook from "./../assets/header/FacebookDesc.png"
import Linkedin from "./../assets/header/LinkedinDesc.png"
import Podigy from "./../assets/header/PodigyDesc.png"
import Google from "./../assets/header/GoogleDesc.png"
import Netflix from "./../assets/header/NetflixDesc.png"

const Header = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="mx-auto container lg:pt-20 pt-10">
          <div className="flex justify-center items-center flex-col text-center">
          <h1 className="lg:text-5xl text-3xl font-medium w-12/12 lg:w-8/12 text-white">
            Build and ship scalable products with on-demand engineering teams.
          </h1>
          <p className=" lg:text-xl text-lg lg:font-normal w-12/12 lg:w-9/12 py-8 text-headerGrey">
            Innovotio helps you set the stage for user-centric products by
            implementing the right strategies through a combination of market
            research, agile sprints, and wide-ranging expertise.
          </p>
          </div>

          <div className="flex flex-row lg:justify-center gap-6">
            <button className="lg:font-medum lg:text-lg h-12 w-56 font-medium rounded-md bg-btnDefaultBlack text-white hover:bg-btnHoverBlack">
              Join Innovotio's family
            </button>
            <button className="lg:font-medum lg:text-md rounded-lg h-12 w-56 font-medium bg-primaryYellow text-black hover:bg-btnHoverYellow">
              Find your next talent
            </button>
          </div>

          <div className="lg:pt-20 pt-14">
            <div className="flex justify-center text-center items-center flex-col ">
              <p className="lg:font-normal lg:text-2xl text-2xl lg:leading-10 py-6 text-white ">Trusted by fast-moving brands & agencies worldwide</p>
              <div className="lg:flex lg:flex-row grid grid-cols-2 gap-10 pt-10  lg:space-x-12">
                <div>
                  <Image alt='apple' src={Apple} width={120}/>
                </div>
                <div>
                  <Image alt='facebook' src={Facebook} width={120}/>
                </div>
                <div>
                  <Image alt='linkedin' src={Linkedin} width={120}/>
                </div>
                <div>
                  <Image alt='podigy' src={Podigy} width={120}/>
                </div>
                <div>
                  <Image alt='google' src={Google} width={120}/>
                </div>
                <div>
                  <Image alt='netflix' src={Netflix} width={120}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
