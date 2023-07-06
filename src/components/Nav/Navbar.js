import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../assets/footer/Vector.svg";
import mobileLogo from "../../assets/Navbar/logo.svg";
import cancel from "../../assets/Navbar/Menu.svg";
import arrow from "../../assets/Navbar/arrow.png";
import menu from "../../assets/Navbar/Menu (1).svg";
import Abt from "./Abt";
import Tal from "./Tal";
import Business from "./Business";
import Button from "../Micro/Button/Button";

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (nav && !event.target.closest(".navbar")) {
        setNav(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [nav]);

  return (
    <nav className="2xl:container overflow-x-hidden z-50 mx-auto">
      <section className="navbar flex 2xl:static xl:fixed lg:h-20 h-16 z-50 md:px-10 px-5 bg-black text-white justify-between w-full items-center py-2">
        <Link href="/" className="cursor-pointer">
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

        <ul className="navbar z-50 justify-between w-5/12 text-base lg:flex hidden">
          <li
            className={`flex items-center cursor-pointer ${
              clickBus ? "text-primaryYellow" : "text-white"
            }`}
            onClick={handleBusClick}
          >
            For Business
            <span className="ml-2">
              <Image src={arrow} width={20} height={20} alt="arrow" />
            </span>
            {clickBus && <Business />}
          </li>
          <li
            onClick={handleTalClick}
            className={`flex items-center cursor-pointer ${
              clickTal ? "text-primaryYellow" : "text-white"
            }`}
          >
            For Talents
            <span className="ml-2">
              <Image src={arrow} width={20} height={20} alt="arrow" />
            </span>
            {clickTal && <Tal />}
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              clickAbout ? "text-primaryYellow" : "text-white"
            }`}
            onClick={handleAboutClick}
          >
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
          } justify-between text-base overflow-x-hidden lg:hidden absolute top-16 left-0 min-w-full min-h-[100vh] z-50 bg-black cursor-pointer `}
        >
          <div className="px-5 md:px-10">
            <div className="mb-8 mt-4">
              <p className="text-sm text-nav font-light mb-5">FOR BUSINESS</p>
              <ul className="text-lg">
                <li className="mb-5">
                  <Link href="/business">Recuitment</Link>
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
                  <li className="mb-5">
                    <Link href="/programstraining">Programs Training</Link>
                  </li>
                  <Link href="/jobapplication">Join Innovotio</Link>
                </li>
                <li className="mb-5">
                  <Link href="/aboutus/#community" legacyBehavior>
                    <a target="_blank">Community</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="text-sm text-nav font-light mb-5">ABOUT US</p>
              <ul className="text-lg">
                <li className="mb-5">
                  <Link href="/aboutus">Who We Are</Link>
                </li>
                <li className="mb-5">
                  <Link href="/jobapplication">Careers</Link>
                </li>
                <li className="mb-5">
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="flex mb-20 flex-wrap lg:mb-0">
              <Link href="/business" legacyBehavior>
                <a target="_blank">
                  <Button className="mb-3 lg:mb-0 bg-btnDefaultBlack sm:block hidden  text-white text-lg">
                    Order a Merch
                  </Button>
                </a>
              </Link>
              <Link href="/business" legacyBehavior>
                <a target="_blank">
                  <Button className="mb-3 bg-gray-100 text-black text-lg md:ml-5 ml-0">
                    Hire Tech Talents
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex hidden justify-between">
          <Link href="/business" legacyBehavior>
            <a target="_blank">
              <Button className="bg-btnDefaultBlack text-white lg:hidden xl:block text-lg">
                Order a Merch
              </Button>
            </a>
          </Link>
          <Link href="/business" legacyBehavior>
            <a target="_blank">
              <Button className="bg-gray-100 text-black text-lg ml-5">
                Hire Tech Talents
              </Button>
            </a>
          </Link>
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
