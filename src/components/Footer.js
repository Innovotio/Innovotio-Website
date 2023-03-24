import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/footer/Vector.svg";
import Facebook from "../assets/footer/Facebook.svg";
import Instagram from "../assets/footer/Instagram.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";
import Twitter from "../assets/footer/Twitter.svg";

function Footer() {
  return (
    <footer className="container mx-auto font-font py-20 lg:px-0 px-4">
      <h1 className="lg:w-6/12 w-11/12 lg:text-5xl md:text-4xl text-3xl tracking-wide font-medium pb-0 lg:pb-10">
        We built the complete <span className="text-yellow">talent</span> stack,
        so <span className="text-yellow">you</span> don‘t have to
      </h1>
      <section className="w-12/12 flex lg:flex-row flex-col lg:py-14 py-14">
        <div className="lg:w-5/12 w-12/12 h-64 max-h-64 justify-between flex flex-col">
          <figure>
            <Image src={Logo} alt="Logo" width={250} height={250} />
          </figure>
          <div className="pb-3">
          <button className="h-16 rounded-md text-2xl w-56  border-black border bg-white text-black">
            Hire a talent
          </button>
          </div>
       
          <figure className="flex justify-between w-64">
            <Image src={Facebook} alt="Logo" width={50} height={50} />
            <Image src={LinkedIn} alt="Logo" width={50} height={50} />
            <Image src={Instagram} alt="Logo" width={50} height={50}/>
            <Image src={Twitter} alt="Logo" width={50} height={50} />
          </figure>
        </div>
        <div className="grid grid-cols-3 lg:w-7/12 w-11/12 lg:pt-0 pt-10">
          <ul className="leading-10">
            <li className="text-lg pb-3">
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
            <li className="text-lg pb-3">
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
          <ul className="leading-10">
            <li className="text-lg pb-3">
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
    </footer>
  );
}

export default Footer;
