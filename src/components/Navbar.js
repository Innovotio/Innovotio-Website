import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/footer/Vector.svg";
import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/YellowBtn";
function Navbar() {
  return (
    <nav className="flex justify-between h-20 items-center py-8">
      <figure className="">
        <Image src={Logo} alt="Logo" width={120} height={1} className="-mt-3" />
      </figure>
      <ul className="justify-between w-5/12 text-base lg:flex hidden">
        <li>
          <Link href="home">For Clients</Link>
        </li>
        <li>
          <Link href="#talent">For Talents</Link>
        </li>
        <li>
          <Link href="#description">About Us</Link>
        </li>
        <li>
          <Link href="#footer">Contact Us</Link>
        </li>
      </ul>
      <div className="lg:flex hidden justify-between w-96">
        <BlackBtn text="Join Innovotio" />
        <YellowBtn text="Hire a talent" />
      </div>
    </nav>
  );
}

export default Navbar;
