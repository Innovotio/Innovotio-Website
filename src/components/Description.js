import React from "react";
import Image from "next/image";
import Quotation from "./../assets/description/Quotation.png"
import Client from "./../assets/description/ClientPicture.png"
import Adiva from "./../assets/description/ADIVA.png"
import Afit from "./../assets/description/AFIT.png"
import Carbon from "./../assets/description/Carbon.png"
import Resume from "./../assets/description/Resume.png"
import Innovation from "./../assets/description/Innovation.png"
import DollarCoin from "./../assets/description/DollarCoin.png"
import People from "./../assets/description/People.png"
import Lawyer from "./../assets/description/Lawyer.png"
import UserShield from "./../assets/description/UserShield.png"

const Description = () => {
  return (
    <>
      <div className="bg-black">
        <div className="lg:mx-auto lg:px-20 lg:py-24 flex flex-row space-x-32">
          <div className="flex flex-col">
            
              <p className="lg:font-semibold lg:text-5xl lg:leading-10 lg:mb-6 text-white">
                How is Innovotio Talent Unique?
              </p>
              <p className="lg:font-semibold lg:text-xl lg:text-headerGrey lg:mb-8">
                Innovotio provides more than just the plumbing for your revenue.
                As a merchant of record, we do it for you:
              </p>
            
            <div className=" lg:flex lg:flex-row  lg:gap-6">
              <button className="lg:font-medum lg:text-xl lg:leading-6 lg:text-center lg:px-8 lg:py-3 lg:rounded-xl bg-btnDefaultBlack text-white hover:bg-btnHoverBlack">
                Join Innovotio
              </button>
              <button className="lg:font-medum lg:text-xl lg:leading-6 lg:text-center lg:px-8 lg:py-3 lg:rounded-xl bg-primaryYellow text-black hover:bg-btnHoverYellow">
                Experience us
              </button>
            </div>
          </div>
          <div className="flex flex-row space-x-16">
            <div className="lg:font-normal lg:text-base lg:text-white lg:text-left">
              <div className="lg:mb-16 lg:flex lg:flex-row lg:space-x-4">
                <Image src={Resume} alt='resume' className="w-6 h-6"/>
                <p className="">Extensive & Fast Hiring of talents between 24-48 Hours</p>
              </div>
              <div className="lg:mb-16 lg:flex lg:flex-row lg:space-x-4">
                <Image src={Innovation} alt='innovation' className="w-6 h-6"/>
                <p >A wide range of experienced talents available & within reach</p>
              </div>
              <div className="lg:mb-16 lg:flex lg:flex-row lg:space-x-4">
                <Image src={DollarCoin} alt='dollar coin' className="w-6 h-6"/>
                <p>Handle all billing-related support queries for you</p>
              </div>
            </div>
            <div className="lg:font-normal lg:text-base lg:text-white lg:text-left ">
              <div className="lg:mb-16 lg:flex lg:flex-row lg:space-x-4">
                <Image src={People} alt='people'className="w-6 h-6" />
                <p>We find, manage & keep training only the best talents</p>
              </div>
              <div className="lg:mb-16 lg:flex lg:flex-row lg:space-x-4">
                <Image src={Lawyer} alt='lawyer' className="w-6 h-6"/>
                <p>Easy access world class tech talent for Full-Time, Remote or Hybrid Roles</p>
              </div>
              <div className="lg:mb-16 lg:flex lg:flex-row lg:space-x-4 ">
                <Image src={UserShield} alt='user shield' className="w-6 h-6"/>
                <p>Proper vetting of numerous applications to find the finest talent for our clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-64">
          <div className="lg:flex lg:flex-row lg:justify-center pb-8 ">
            <Image alt='quotation mark' src={Quotation}/>
          </div>
          <p className="lg:font-normal lg:text-3xl lg:text-center lg:leading-10 text-white">
          We partnered with Innovotio to build out our core engineering team and we couldn't be more thrilled! Innovotio's pool of high-quality, motivated and entrepreneurial engineers was a game-changer during the critical phases of launching our startup. We are excited to work closely with Innovotio to keep on expanding our team and growing together!
          </p> 
          <div className="h-14 flex flex-row justify-center lg:space-x-3 lg:mt-12">
            <div className="">
            <Image alt='client' src={Client}/>
            </div>
            <div>
              <p className="lg:font-normal lg:text-base lg:text-white">Stella Damacus</p>
              <div className="lg:flex lg:flex-row lg:space-x-3 lg:font-normal lg:text-base lg:text-headerGrey">
              <p>Editor-in-chief</p>
              <p>Adiva networks</p>
              </div>
              
            </div>

          </div>
          <div className="lg:flex lg:flex-row space-x-16 justify-center h-16 mt-20 py-5">
              <Image src={Adiva} alt='adiva'/>
              <Image src={Afit} alt='afit'/>
              <Image src={Carbon} alt='carbon'/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Description;
