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

export const Tal = () => {
  return (
    <nav className="w-5/6 right-28  z-50 cursor-pointer h-52 bg-black items-center rounded-xl border-headerGrey absolute top-24 justify-between flex border border-opacity-30">
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/jobapplication" >
          <>
            <h3 className="text-xl mb-2">Join Innovotio</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              We work as an extension of your in-house team and assemble the
              right team members for every task and project.
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/community" >
          <>
            <h3 className="text-xl mb-2">Community</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              Innovotio has an active community to provide support for
              recuiters, organizations and provode tech talent management.
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/community" >
          <>
            <h3 className="text-xl mb-2">Programs Training</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              Get started with a tech skill using our one month introductory
              training program. Get introduced to all the basics necessary to
              start a career in tech.
            </p>
          </>
        </a>
      </div>
    </nav>
  );
};

export const Abt = () => {
  return (
    <nav className="w-5/6 right-28 z-50 cursor-pointer h-52 bg-black items-center rounded-xl border-headerGrey absolute top-24 justify-between flex border border-opacity-30">
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/aboutUs" >
          <>
            <h3 className="text-xl mb-2">Who We Are</h3>
            <p className="text-sm w-11/12  text-headerGrey">
              We go beyond connecting tech talents to businesses and offer
              additional services for businesses and our talent pool.
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/jobapplication" >
          <>
            <h3 className="text-xl mb-2">Careers</h3>
            <p className="text-sm w-11/12  text-headerGrey">
              Put your best foot forward and fast track landing a new tech job
              with innovotio
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10 h-full py-10">
        <a href="/aboutUs" >
          <>
            <h3 className="text-xl mb-2">Blogs</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              Read the articles on community building, talents testimonials and
              get business tips too on our blog.
            </p>
          </>
        </a>
      </div>
    </nav>
  );
};

export const Business = () => {
  return (
    <nav className=" w-7/12 left-20 cursor-pointer h-96  bg-black items-center rounded-xl border-headerGrey absolute top-24 grid grid-cols-2 border border-opacity-30">
      <div className="w-11/12 hover:bg-btnHoverBlack h-full py-6 px-6">
        <a href="/jobapplication" >
          <>
            <h3 className="text-xl mb-2">Recruitment</h3>
            <p className="text-sm text-headerGrey">
              Ease your recuitment process with our human resource team designed
              to vet and provide the best fit from our tech talents.
            </p>
          </>
        </a>
      </div>
      <div className=" hover:bg-btnHoverBlack  h-full py-10 w-full px-10">
        <a href="/business" >
          <>
            <h3 className="text-xl mb-2">Tech Event Organization</h3>
            <p className="text-sm text-headerGrey">
              We train, assess and maintain the quality of our talent pool
              regularly to ensure satisfaction both for busniesses and talents.
            </p>
          </>
        </a>
      </div>
      <div className=" hover:bg-btnHoverBlack  h-full overflow-hidden py-10 w-11/12 px-10">
        <a href="/business" >
          <>
            <h3 className="text-xl mb-2">Consultancy</h3>
            <p className="text-sm text-headerGrey">
              We offer one month of free business consultancy to small
              businesses and startups. We assist in the launch process & early
              stages of the business to establish business structure.
            </p>
          </>
        </a>
      </div>
      <div className=" hover:bg-btnHoverBlack overflow-hidden  h-full py-10 w-full px-10">
        <a href="/business" >
          <>
            <h3 className="text-xl mb-2">Merchandising</h3>
            <p className="text-sm text-headerGrey">
              As tech event organizers, we also create branded merchandise for
              tech organizations and communities for events and merch stores.
            </p>
          </>
        </a>
      </div>
    </nav>
  );
};

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

  return (
  <nav className="2xl:container 2xl:mx-auto">

    <section className="flex 2xl:static w-12/12 xl:fixed lg:h-20 h-16 z-50 bg-black  text-white justify-between w-full lg:px-8  px-0 items-center py-2">
      <Link href="/">
        <figure className="px-5 lg:px-0">
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
        } justify-between z-50 text-base tracking-wide lg:hidden top-16 absolute px-6 bg-black w-full cursor-pointer `}
      >
        <div className="mb-8 mt-4">
          <p className="text-sm text-nav font-light mb-5">FOR BUSINESS</p>
          <ul>
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
          <ul>
            <li className="mb-5"><Link href="/jobapplication">Join Innovotio</Link></li>
            <li className="mb-5"><Link href="/community">Community</Link></li>
            <li className="mb-5"><Link href="/community">Programs Training</Link></li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="text-sm text-nav font-light mb-5">ABOUT US</p>
          <ul>
            <li className="mb-5">
              <Link href="/aboutUs">Who We Are</Link>
            </li>
            <li className="mb-5"><Link href="/aboutUs">Careers</Link></li>
            <li className="mb-5"><Link href="/aboutUs">Blog</Link>Blogs</li>
          </ul>
        </div>
        <div className="flex flex-wrap h-28 lg:mb-0 mb-20">
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
      <div className="lg:hidden block cursor-pointer mr-5" onClick={handleNav}>
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
