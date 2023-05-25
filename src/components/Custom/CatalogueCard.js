import React from "react";
import Link from "next/link";
import {BsArrowRight} from 'react-icons/bs'

const CatalogueCard = ({ icon, heading, service }) => {
  return (
    <section className="hover:bg-primaryYellow hover:text-black lg:max-w-[410px] max-w-full h-[220px] px-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start">
      <div className="flex items-center">
        <div>{icon}</div>
        <h2 className="lg:text-lg font-medium ml-2 text-lg">{heading}</h2>
      </div>
      <p className="leading-8 text-start font-medium text-base max-w-full lg:max-w-md md:max-w-lg md:text-sm py-5 text-gray">
        {service}
      </p>
      <Link href="/" legacyBehavior>
        <a target="_blank" className="font-medium flex items-center">Register Now <BsArrowRight className="font-medium w-8"/> </a>
      </Link>
      <style jsx>{`
        .hover\:text-black:hover p {
          color: black;
        }
      `}</style>
    </section>
  );
};

export default CatalogueCard;
