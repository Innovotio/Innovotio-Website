import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/footer/Vector.svg";
import Facebook from "../assets/footer/Facebook.svg";
import Instagram from "../assets/footer/Instagram.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";
import Twitter from "../assets/footer/Twitter.svg";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="font-font text-white px-8 pt-16 lg:pt-44 cursor-pointer">
      <h1 className="lg:w-7/12 md:w-8/12 w-12/12 leading-tight lg:text-5xl text-2xl tracking-wide font-medium pb-0 lg:pb-10">
        We built the complete <span className="text-yellow">talent</span> stack,
        so <span className="text-yellow">you</span> don‘t have to
      </h1>
      <section className="w-12/12 flex lg:flex-row flex-col-reverse lg:py-14 py-14 border-b border-headerGrey border-opacity-20">
        <div className="lg:w-5/12 lg:mt-0 mt-10 w-12/12 flex flex-col">
          <figure>
            <Image src={Logo} alt="Logo" width={140} height={140} />
          </figure>
          <div className="">
            <button className="h-11 font-medium rounded-xl text-lg mt-7  w-40 border-black border  bg-white text-black">
              Hire a talent
            </button>
          </div>

          <figure className="flex justify-between w-56 md:w-80 mt-7">
            <Image src={Facebook} alt="Logo" width={40} height={40} />
            <Image src={Instagram} alt="Logo" width={40} height={40} />
            <Image src={LinkedIn} alt="Logo" width={40} height={40} />
            <Image src={Twitter} alt="Logo" width={40} height={40} />
          </figure>
        </div>
        <div className="grid md:grid-cols-2 grid-col-1 gap-16 text-base lg:gap-0 lg:grid-cols-3 lg:w-7/12 w-11/12 lg:pt-0 pt-0">
          <ul className="leading-10 w-12/12">
          <li className="lg:text-lg text-lg text-gray pb-3">
              <Link href="">Services</Link>
            </li>
            <li className="pb-3">
              <Link href="">Outsourcing</Link>
            </li>
            <li className="pb-3">
              <Link href="">Events Organizations</Link>
            </li>
            <li className="pb-3">
              <Link href="">Consultancy</Link>
            </li>
            <li className="pb-3">
              <Link href="">Merchandising</Link>
            </li>
            <li>
              <Link href="">Community</Link>
            </li>
          </ul>
          <ul className="leading-10">
            <li className="lg:text-lg text-lg text-gray  pb-3">
              <Link href="">Company</Link>
            </li>
            <li className="pb-3">
              <Link href="/">Who we are</Link>
            </li>
            <li className="pb-3">
              <Link href="">Careers</Link>
            </li>
            <li className="">
              <Link href="">Blogs</Link>
            </li>
          </ul>
          <ul className="leading-10 w-96">
          <li className="lg:text-lg text-lg w-96 text-gray pb-3">
              <Link href="">Contact Us</Link>
            </li>
            <li className="pb-3">
              <Link href="">talents@innovotio.com</Link>
            </li>
            <li className="pb-3">
              <Link href="">+234 901 32456</Link>
            </li>
            <li>
              <Link href="">Drop a message</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-5">
        <Copyright/>
      </section>
    </footer>
  );
}

export default Footer;
