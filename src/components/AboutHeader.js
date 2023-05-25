import Image from "next/image";
import akaneex from "./../assets/header/akaneex.svg";
import task from "./../assets/header/task.svg";
import GDG from "./../assets/header/GDG.svg";
import gdgajah from "./../assets/header/gdgajah.svg";
import bullion from "./../assets/header/bullion.svg";
import Client from "./Custom/Client";

const AboutHeader = () => {
  return (
    <section className="lg:pt-44 pt-20 md:px-10 px-5 container mx-auto ">
      <div className="text-white w-12/12 flex lg:flex-row flex-col lg:items-center lg:space-x-4 justify-between">
        <div className="lg:w-5/12 w-full">
          <h2 className="lg:text-4xl leading-7 md:max-w-xl  lg:max-w-md max-w-lg md:text-2xl text-xl font-medium">
            Our mission is to connect competent tech talents to hiring
            organizations.
          </h2>
        </div>
        <div className="font-light lg:w-5/12 w-full leading-8 lg:pt-0 pt-4 lg:text-lg lg:max-w-lg max-w-full text-justify md:text-base text-base text-headerGrey">
          <p>
            Innovotio offers up-to-date training programs for tech skills for
            beginners or young tech talents looking to upskill. For our training
            programs at Innovotio, we offer various training packages for
            student’s convenience by timeline and sessions
          </p>

          <p className="mt-5">
            Innovotio offers additional services for organizations in forms of
            Recruiting Tech Talents, Business Consultancy, Tech Events
            Management & Branded Merchandise.
          </p>
        </div>
      </div>
      <div className="lg:pt-32 pt-10 lg:block hidden">
      <Client />
      </div>
    </section>
  );
};

export default AboutHeader;
