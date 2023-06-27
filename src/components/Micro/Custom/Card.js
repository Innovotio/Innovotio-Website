import Image from "next/image";
const Card = ({ image, heading, service }) => {
  return (
    <section className="hover:bg-btnHoverBlack hover:text-white text-text max-w-2xl h-[300px] px-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start">
      <Image src={image} alt="service icons" width={36} height={40} />
      <h2 className="lg:text-xl text-lg py-5 text-white">{heading}</h2>
      <p className="leading-8 text-start text-base max-w-md md:max-w-md lg:text-lg ">
        {service}
      </p>
    </section>
  );
};

export default Card;
