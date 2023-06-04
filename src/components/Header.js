import { useEffect } from "react";
import Link from "next/link";
import Client from "./Custom/Client";
import AOS from "aos";

const Header = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className=" xl:pt-64 lg:pt-40 md:pt-16 pt-16 md:px-10 px-5">
          <div className="flex justify-center items-center px-4 flex-col text-center w-full">
              <h1 className="md:text-6xl text-4xl lg:max-w-4xl max-w-2xl leading-10 font-medium text-white">
                Get qualified tech talents & tech business support
              </h1>
              <p className=" md:text-xl max-w-md md:max-w-3xl leading-7 text-sm px-4 lg:font-normal py-7 text-headerGrey">
                We provide qualified tech talents to hiring organizations and
                provide business support to tech organizations.
              </p>
            <div className="flex lg:flex-row flex-col lg:justify-center lg:gap-4">
              <Link href="/jobapplication" legacyBehavior>
                <a target="_blank">
                  <button className="lg:font-medium lg:text-lg h-12 w-56 font-medium rounded-md  bg-btnDefaultBlack text-white hover:bg-zinc-700 ">
                    Join Innovotio
                  </button>
                </a>
              </Link>
              <Link href="/business" legacyBehavior>
                <a target="_blank">
                  <button className="lg:font-medium lg:mt-0 mt-3 lg:text-lg text-base rounded-lg h-12 w-56 font-medium bg-primaryYellow text-black hover:bg-btnHoverYellow">
                    Hire Tech Talent
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div className="lg:pt-32 flex-col lg:flex hidden justify-center items-center">
            <div className="flex justify-center text-center items-center flex-col ">
              {/* <p className="lg:font-normal font-light lg:text-2xl text-xl lg:leading-10 py-6 text-gray ">
                Trusted by fast-moving clients worldwide
              </p> */}
              <Client />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
