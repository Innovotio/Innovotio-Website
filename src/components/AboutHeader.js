import Image from "next/image";
import akaneex from "./../assets/header/akaneex.svg";
import task from "./../assets/header/task.svg";
import GDG from "./../assets/header/GDG.svg";
import gdgajah from "./../assets/header/gdgajah.svg";
import bullion from "./../assets/header/bullion.svg";

const AboutHeader = () => {
  return (
    <section className="lg:pt-44 pt-24 px-8  mx-auto container">

    <div className="text-white flex lg:flex-row flex-col lg:items-center justify-between">
      <div className="lg:w-4/12 w-full">
        <h2 className="md:text-3xl lg:w-full w-11/12 md:text-9/12 text-xl font-medium leading-snug">
          Our mission is to connect competent tech talents to hiring
          organizations.
        </h2>
      </div>
      <div className="lg:w-5/12 lg:mt-0 mt-5 w-full leading-8 lg:text-lg md:text-base text-sm text-headerGrey">
        <p>
          Innovotio offers up-to-date training programs for tech skills for
          beginners or young tech talents looking to upskill. For our training
          programs at Innovotio, we offer various training packages for
          student’s convenience by timeline and sessions
        </p>

        <p className="mt-5">
          Innovotio offers additional services for organizations in forms of
          Recruiting Tech Talents, Business Consultancy, Tech Events Management
          & Branded Merchandise.
        </p>
      </div>
     
    </div>
    <div className="lg:pt-32 pt-16 flex flex-col justify-center items-center ">
            <div className="flex justify-center text-center items-center flex-col ">
              <div className=" md:grid-cols-5 gap-16 grid grid-cols-5 px-10  place-items-center items-center pt-6" style={{ animation: "scrolling 25s linear infinite"}}>
                <div>
                  <Image alt="akaneex" src={akaneex} width={150} height={150} className="w-96 h-96 md:w-auto md:h-auto" />
                </div>
                <div>
                  <Image alt="task" src={task}width={150} height={150} priority/>
                </div>
                <div>
                  <Image alt="GDG" src={GDG} width={200} height={200} />
                </div>
                <div>
                  <Image alt="bullion" src={bullion} width={100} height={100}/>
                </div>
                <div>
                  <Image alt="gdgajah" src={gdgajah}width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default AboutHeader;
