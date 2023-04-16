import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from "../assets/footer/Vector.svg";
import mobileLogo from "../assets/Navbar/logo.svg";
import cancel from "../assets/Navbar/Menu.svg";
import arrow from "../assets/Navbar/arrow.png";
import menu from "../assets/Navbar/Menu (1).svg";
import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/YellowBtn";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex  mx-auto container text-white justify-between lg:px-8 px-0 items-center h-20 py-12">
     <Link href="/">
      <figure className="px-8 lg:px-0">
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
        <li>
          <Link className="flex items-center" href="#talent">For Business <span className="ml-2"><Image src={arrow}  width={20} height={20} alt="arrow"/></span></Link>
        </li>
        <li>
          <Link className="flex items-center" href="#talent">For Talents <span className="ml-2"><Image src={arrow}  width={20} height={20} alt="arrow"/></span></Link>
        </li>
        <li>
          <Link className="flex items-center" href="/aboutUs">About Us <span className="ml-2"><Image src={arrow} width={20} height={20} alt="arrow"/></span></Link>
        </li>
      </ul>
      <div
        className={` ${
          nav ? "block" : "hidden"
        } justify-between z-50 text-base  tracking-wide lg:hidden top-28 absolute px-6 bg-black w-full cursor-pointer `}
      >
        <div className="mb-14 mt-8">
          <p className="text-sm text-nav font-light mb-5">FOR BUSINESS</p>
          <ul>
            <li className="mb-5 text-xl">Recuitment</li>
            <li className="mb-5 text-xl">Tech Event Organization</li>
            <li className="mb-5 text-xl">Merchandising</li>
            <li className="mb-5 text-xl">Consultancy</li>
          </ul>
        </div>
        <div className="mb-14">
          <p className="text-sm text-nav font-light mb-5">FOR TALENTS</p>
          <ul>
            <li className="mb-5 text-xl">Join Innovotio</li>
            <li className="mb-5 text-xl">Community</li>
            <li className="mb-5 text-xl">Programs Training</li>
          </ul>
        </div>
        <div className="mb-14">
          <p className="text-sm text-nav font-light mb-5">ABOUT US</p>
          <ul>
            <li className="mb-5 text-xl"><Link href="/aboutUs">Who We Are</Link></li>
            <li className="mb-5 text-xl">Careers</li>
            <li className="mb-5 text-xl">Blogs</li>
          </ul>
        </div>
        <div className="flex flex-wrap lg:mb-0 mb-20">
          <div className="mb-5 mr-10">
          <BlackBtn text="Join Innovotio" />
          </div>
          <div className="">
            <YellowBtn text="Hire a talent" />
          </div>
        </div>
      </div>

      <div className="lg:flex hidden justify-between w-96">
        <BlackBtn text="Join Innovotio" />
        <YellowBtn text="Hire a talent" />
      </div>
      <div className="lg:hidden block cursor-pointer mr-8" onClick={handleNav}>
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
    </nav>
  );
}

export default Navbar;
