import Image from "next/image";
import React from "react";
import program from "../../assets/programs/dev.svg";
import peer from "../../assets/programs/peer.svg";
import privateImg from "../../assets/programs/private.svg";

const Styles = () => {
  return (
    <section className="container mx-auto text-white flex lg:flex-row flex-col justify-around  md:px-10 px-5  lg:items-center lg:pt-40 md:pt-16 pt-16">
      <div className="" data-aos="zoom-in-right">
        <>
          <h1 className="lg:text-4xl text-2xl sm:text-3xl font-medium leading-10 max-w-md md:max-w-full lg:max-w-lg">
            We also offer a variety of training styles for student
          </h1>
        </>
        <div>
          <div className="py-9">
            <div className="flex">
              <Image src={privateImg} alt="coding" width={30} height={31} />
              <h3 className="pl-3 sm:text-2xl  font-medium">
                Private training sessions
              </h3>
            </div>
            <p className=" py-2 text-base font-light max-w-lg md:max-w-full lg:max-w-lg text-justify text-headerGrey leading-7">
              If you learn better alone, you can opt for a private training
              session to have a private tutor to work one on one with you to
              brush up your tech skills.
            </p>
          </div>
          <div>
            <div className="flex">
              <Image src={peer} alt="coding" width={30} height={31} />
              <h3 className="sm:text-2xl ml-3 font-medium">
                Peer training sessions
              </h3>
            </div>

            <p className="py-2 text-base font-light max-w-lg md:max-w-full lg:max-w-lg  text-justify text-headerGrey leading-7">
              If you learn better in a group, you can opt for our group training
              sessions to learn with a community of people with similar interest
            </p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left">
        <Image src={program} alt="coding" width={475} height={416} />
      </div>
    </section>
  );
};

export default Styles;
