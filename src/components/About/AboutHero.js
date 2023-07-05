import React from "react";
import Client from "../Micro/Custom/Client";

const AboutHero = () => {
  return (
    <section
      data-aos="zoom-in-right"
      className="text-white md:px-10 px-5 xl:pt-40 lg:pt-24 md:pt-16 pt-14 mx-auto container"
    >
      <h1 className="md:text-5xl text-4xl font-medium  mb-7">Who We Are</h1>
      <div className="text-headerGrey lg:text-xl text-base text-justify  max-w-xl md:max-w-3xl font-light">
        <p>
          Innovotio is a tech organization that specializes in connecting tech
          talent across all levels of experience to organizations of all sizes
          to achieve their business goals.
        </p>
        <p className="py-5">
          We offer up-to-date training programs for tech beginners or young tech
          talents looking to upskill and provide additional services to
          organizations in forms of business consultancy, tech events management
          & branded merchandise.
        </p>
      </div>
      <div className="lg:pt-28 pt-5 lg:block hidden">
        <Client />
      </div>
    </section>
  );
};

export default AboutHero;
