import React from "react";
import Link from "next/link";
import {BsArrowRight} from 'react-icons/bs'

const CatalogueCard = ({ icon, heading, service }) => {
  return (
    <section className="cursor-pointer hover:bg-primaryYellow hover:text-black lg:max-w-[425px] max-w-full h-[245px] px-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start">
      <div className="flex items-center">
        <div>{icon}</div>
        <h2 className="lg:text-lg font-medium ml-2 text-lg">{heading}</h2>
      </div>
      <p className="leading-8 text-start font-medium text-base max-w-full lg:max-w-md md:max-w-lg md:text-sm py-5 text-gray">
        {service}
      </p>
      <Link href="https://forms.gle/Ky3UX3oUabK3Xm6a7" legacyBehavior>
        <a target="_blank" className="font-medium flex items-center underline-hover">Register Now <BsArrowRight className="font-medium w-8"/> </a>
      </Link>
      <style jsx>{`
        .hover\:text-black:hover p {
          color: black;
        }
        .underline-hover {
          position: relative;
        }
        
        .underline-hover:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: black;
          transition: width 0.3s ease-in-out;
        }
        
        .underline-hover:hover:after {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default CatalogueCard;
