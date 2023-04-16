import Image from "next/image";
import akaneex from "./../assets/header/akaneex.svg";
import task from "./../assets/header/task.svg";
import GDG from "./../assets/header/GDG.svg";
import gdgajah from "./../assets/header/gdgajah.svg";
import bullion from "./../assets/header/bullion.svg";

const Header = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="lg:pt-44 pt-14 px-8">
          <div className="flex justify-center items-center px-4 flex-col text-center w-full">
            <h1 className="lg:text-5xl md:text-5xl text-4xl lg:tracking-wide tracking-wide leading-tight font-medium w-11/12 md:w-8/12 lg:w-8/12 text-white">
              Build a reliable team of efficient tech talents.
            </h1>
            <p className=" lg:text-xl md:text-lg text-base px-4 lg:font-normal w-12/12 md:w-9/12 xl:w-7/12 py-8 text-headerGrey">
              Innovotio helps to link efficient tech talents across all levels
              of experience to organizations of all sizes to ensure smooth
              operation.
            </p>
            <div className="flex lg:flex-row flex-col lg:justify-center gap-6">
              <button className="lg:font-medum lg:text-lg h-12 w-56 font-medium rounded-md bg-btnDefaultBlack text-white hover:bg-btnHoverBlack">
                Join Innovotio
              </button>
              <button className="lg:font-medum lg:text-md rounded-lg h-12 w-56 font-medium bg-primaryYellow text-black hover:bg-btnHoverYellow">
                Hire Tech Talent
              </button>
            </div>
          </div>

          <div className="lg:pt-44 pt-16 flex flex-col justify-center items-center">
            <div className="flex justify-center text-center items-center flex-col ">
              <p className="lg:font-normal lg:text-2xl text-2xl lg:leading-10 py-6 text-white ">
                Trusted by fast-moving clients worldwide
              </p>
              <div className="md:grid-cols-5 gap-5 grid grid-cols-3 px-10 place-items-center items-center pt-6">
                <div>
                  <Image alt="akaneex" src={akaneex} width={120} height={100} />
                </div>
                <div>
                  <Image alt="task" src={task} width={120} height={100}/>
                </div>
                <div>
                  <Image alt="GDG" src={GDG} width={180} height={180} />
                </div>
                <div>
                  <Image alt="bullion" src={bullion} width={60} height={60}/>
                </div>
                <div>
                  <Image alt="gdgajah" src={gdgajah}width={180} height={180} />
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
