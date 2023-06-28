import Image from "next/image";
import Link from "next/link";

const Card = ({ image, heading, service, link }) => {
  return (
    <Link legacyBehavior href={link}>
      <a
        target="_blank"
        className="hover:bg-btnHoverBlack hover:text-white text-text max-w-2xl h-[300px] px-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start"
      >
        <Image src={image} alt="service icons" width={36} height={40} />
        <h2 className="lg:text-xl text-lg py-5 text-white">{heading}</h2>
        <p className="leading-8 text-start text-base max-w-md md:max-w-md lg:text-lg ">
          {service}
        </p>
      </a>
    </Link>
  );
};
export default Card;
