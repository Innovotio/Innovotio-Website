import React from "react";
import Button from "./Custom/Button";
import Image from "next/image";
import Apple from "./../assets/AppleDesc.png"
import Facebook from "./../assets/FacebookDesc.png"
import Linkedin from "./../assets/LinkedinDesc.png"
import Podigy from "./../assets/PodigyDesc.png"
import Google from "./../assets/GoogleDesc.png"
import Netflix from "./../assets/NetflixDesc.png"

const Header = () => {
  return (
    <>
      <div className="bg-black">
        <div className="lg:mx-auto lg:px-20 lg:py-24">
          <div className="lg:px-44">
          <h1 className="lg:text-6xl lg:leading-10 lg:text-center lg:mb-5 text-white">
            Build and ship scalable products with on-demand engineering teams.
          </h1>
          <p className=" lg:text-center lg:text-xl lg:font-normal lg:mb-8 text-headerGrey">
            Innovotio helps you set the stage for user-centric products by
            implementing the right strategies through a combination of market
            research, agile sprints, and wide-ranging expertise.
          </p>
          </div>

          <div className=" lg:flex lg:flex-row lg:justify-center lg:gap-6">
            <button className="lg:font-medum lg:text-xl lg:leading-6 lg:text-right lg:px-7 lg:py-4 lg:rounded-xl bg-btnDefaultBlack text-white hover:bg-btnHoverBlack">
              Join Innovotio's Family
            </button>
            <button className="lg:font-medum lg:text-xl lg:leading-6 lg:text-right lg:px-7 lg:py-4 lg:rounded-xl bg-primaryYellow text-black hover:bg-btnHoverYellow">
              Find your next talent
            </button>
          </div>

          <div className="lg:mt-36">
            <div className="lg:my-6">
              <p className="lg:font-normal lg:text-center lg-text-white lg:text-3xl lg:leading-10 lg:my-8 text-white ">Trusted by fast-moving brands& agencies worldwide</p>
              <div className="lg:flex lg:flex-row lg:space-x-12">
                <div>
                  <Image alt='apple' src={Apple}/>
                </div>
                <div>
                  <Image alt='facebook' src={Facebook}/>
                </div>
                <div>
                  <Image alt='linkedin' src={Linkedin}/>
                </div>
                <div>
                  <Image alt='podigy' src={Podigy}/>
                </div>
                <div>
                  <Image alt='google' src={Google}/>
                </div>
                <div>
                  <Image alt='netflix' src={Netflix}/>
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
