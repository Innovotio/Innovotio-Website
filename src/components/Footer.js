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
    <footer className=" mx-auto container font-font text-white px-5  lg:pt-40 md:pt-28 pt-20 cursor-pointer">
      <h1 className="lg:max-w-3xl md:max-w-xl max-w-md lg:text-5xl text-3xl tracking-wide font-medium pb-0 lg:pb-10">
        We built the complete <span className="text-yellow">talent</span> stack,
        so <span className="text-yellow">you</span> don‘t have to
      </h1>
      <section className="w-12/12 flex lg:flex-row flex-col-reverse lg:py-14 py-14 border-b border-headerGrey border-opacity-20">
        <div className="lg:w-5/12 lg:mt-0 mt-10 w-12/12 flex flex-col">
          <figure>
            <Image src={Logo} alt="Logo" width={140} height={140} />
          </figure>
          <div className="">
            <Link href="/business" legacyBehavior>
              <a target="_blank">
                <button className="hover:bg-btnHoverYellow h-11 font-medium rounded-xl text-lg mt-7  w-40 border-black border  bg-white text-black">
                  Hire a talent
                </button>
              </a>
            </Link>
          </div>

          <figure className="flex justify-between w-52 md:w-64 mt-10">
            <Link
              href="https://web.facebook.com/people/Innovotio/100087403136156/?mibextid=ZbWKwL"
              legacyBehavior
            >
              <a target="_blank">
                <Image src={Facebook} alt="Logo" width={40} height={40} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/innovotio/" legacyBehavior>
              <a target="_blank">
                <Image src={Instagram} alt="Logo" width={40} height={40} />
              </a>
            </Link>

            <Link
              href="https://www.linkedin.com/company/innovotio-limited/"
              legacyBehavior
            >
              <a target="_blank">
                <Image src={LinkedIn} alt="Logo" width={40} height={40} />
              </a>
            </Link>
            <Link href="https://twitter.com/Innovotio" legacyBehavior>
              <a target="_blank">
                <Image src={Twitter} alt="Logo" width={40} height={40} />
              </a>
            </Link>
          </figure>
        </div>
        <div className="grid md:grid-cols-2  grid-col-1 gap-16 text-lg lg:gap-0 lg:grid-cols-3 lg:w-7/12 w-11/12 lg:pt-0 pt-0">
          <ul className="leading-10 w-12/12">
            <li className=" pb-3">
              <Link href="/business" legacyBehavior>
                <a target="_blank">Services</a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/business" legacyBehavior>
                <a target="_blank">Outsourcing</a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/business" legacyBehavior>
                <a target="_blank">Events Organizations</a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/business" legacyBehavior>
                <a target="_blank">Consultancy </a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/business" legacyBehavior>
                <a target="_blank">Merchandising </a>
              </Link>
            </li>
            <li>
              <Link href="http://bit.ly/Innovotio" legacyBehavior>
                <a target="_blank">Community</a>
              </Link>
            </li>
          </ul>
          <ul className="leading-10">
            <li className=" pb-3">
              <Link href="/aboutUs">Company</Link>
            </li>
            <li className="pb-3">
              <Link href="/aboutUs">Who we are</Link>
            </li>
            <li className="pb-3">
              <Link href="http://bit.ly/Innovotio" legacyBehavior>
                <a target="_blank">Careers</a>
              </Link>
            </li>
            <li className="">
              <Link href="">Blogs</Link>
            </li>
          </ul>
          <ul className="leading-10 w-96">
            <li className="w-96 pb-3">
              <Link href="http://bit.ly/Innovotio" legacyBehavior>
                <a target="_blank">Contact Us</a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href=""> talents@innovotio.com</Link>
            </li>
            <li className="pb-3">
              <Link href="">+234 901 32456</Link>
            </li>
            <li>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdwnoNoc6hcbi_CfYO2xgtYj5BTrheSfUvDiO2ijQuxIFS4nA/viewform?usp=pp_url">
                Drop a message
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-5">
        <Copyright />
      </section>
    </footer>
  );
}

export default Footer;
