import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../../assets/footer/Vector.svg";
import mobileLogo from "../../assets/Navbar/logo.svg";
import cancel from "../../assets/Navbar/Menu.svg";
import arrow from "../../assets/Navbar/arrow.png";
import menu from "../../assets/Navbar/Menu (1).svg";
import BlackBtn from "../Custom/BlackBtn";
import YellowBtn from "../Custom/YellowBtn";
import Abt from "./Abt";
import Tal from "./Tal";
import Business from "./Business";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [clickTal, setClickTal] = useState(false);
  const [clickBus, setClickBus] = useState(false);
  const [clickAbout, setClickAbout] = useState(false);

  const handleTalClick = () => {
    setClickTal(!clickTal);
    setClickBus(false);
    setClickAbout(false);
  };
  const handleAboutClick = () => {
    setClickAbout(!clickAbout);
    setClickBus(false);
    setClickTal(false);
  };

  const handleBusClick = () => {
    setClickBus(!clickBus);
    setClickTal(false);
    setClickAbout(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = () => {
    setNav(!nav);
  };

  return (
    <nav className=" overflow-x-hidden bg-black ">
      <section
        className="cursor-pointer 2xl:container 2xl:mx-auto flex 2xl:static w-12/12 xl:fixed lg:h-20 h-16 z-50 bg-black  text-white justify-between w-full  px-5 md:px-10  items-center py-2"
      >
        <Link href="/">
          <figure className="">
            <Image
              src={Logo}
              alt="innovotio's logo"
              width={120}
              height={1}
              className="-mt-3 hidden lg:block"
            />
            <Image
              src={mobileLogo}
              alt="innovotio's logo"
              width={24}
              height={24}
              className="block lg:hidden"
            />
          </figure>
        </Link>
        <ul className=" justify-between w-5/12 text-base lg:flex hidden">
          <li className="flex items-center" onClick={handleBusClick}>
            For Business
            <span className="ml-2">
              <Image src={arrow} width={20} height={20} alt="arrow" />
            </span>
            {clickBus && <Business />}
          </li>
          <li
            onClick={handleTalClick}
            className="flex items-center cursor-pointer"
          >
            For Talents
            <span className="ml-2">
              <Image src={arrow} width={20} height={20} alt="arrow" />
            </span>
            {clickTal && <Tal />}
          </li>
          <li className="flex items-center" onClick={handleAboutClick}>
            About Us
            <span className="ml-2">
              <Image src={arrow} width={20} height={20} alt="arrow" />
            </span>
            {clickAbout && <Abt />}
          </li>
        </ul>
        <div
          className={` ${
            nav ? "block" : "hidden"
          } justify-between text-base overflow-x-hidden lg:hidden top-16 absolute left-0 w-full min-h-[100vh] z-50 bg-black cursor-pointer `}
        >
          <div className="px-5">
            <div className="mb-8 mt-4">
              <p className="text-sm text-nav font-light mb-5">FOR BUSINESS</p>
              <ul className="text-lg">
                <li className="mb-5">
                  <Link href="/jobapplication">Recuitment</Link>
                </li>
                <li className="mb-5">
                  <Link href="/business">Tech Event Organization</Link>
                </li>
                <li className="mb-5">
                  <Link href="/business">Merchandising</Link>
                </li>
                <li className="mb-5">
                  <Link href="/business">Consultancy</Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="text-sm text-nav font-light mb-5">FOR TALENTS</p>
              <ul className="text-lg">
                <li className="mb-5">
                  <Link href="/jobapplication">Join Innovotio</Link>
                </li>
                <li className="mb-5">
                  <Link href="http://bit.ly/Innovotio" legacyBehavior>
                    <a target="_blank">Community</a>
                  </Link>
                </li>
                <li className="mb-5">
                  <Link href="/programsTraining">
                    Programs Training
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="text-sm text-nav font-light mb-5">ABOUT US</p>
              <ul className="text-lg">
                <li className="mb-5">
                  <Link href="/aboutUs">Who We Are</Link>
                </li>
                <li className="mb-5">
                  <Link href="/jobapplication">Careers</Link>
                </li>
                <li className="mb-5">
                  <Link href="/aboutUs">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="flex mb-20 flex-wrap lg:mb-0">
              <div className="mb-3 ">
                <Link href="/jobapplication" legacyBehavior>
                  <BlackBtn text="Join Innovotio" />
                </Link>
              </div>
              <div className="ml-2">
                <Link href="/business" legacyBehavior>
                  <YellowBtn text="Hire a talent" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex hidden justify-between">
          <BlackBtn text="Join Innovotio" />
          <div className="md:ml-4">
            <YellowBtn text="Hire a talent" />
          </div>
        </div>

        <div className="lg:hidden block cursor-pointer" onClick={handleNav}>
          {nav ? (
            <Image
              src={cancel}
              alt="innovotio's menu"
              width={36}
              height={36}
              className="block lg:hidden"
            />
          ) : (
            <Image
              src={menu}
              alt="innovotio's menu"
              width={36}
              height={36}
              className="block lg:hidden"
            />
          )}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
