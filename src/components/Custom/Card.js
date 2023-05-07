import Image from "next/image"
const Card = ({image, heading, service}) => {
  return (
    <section className="hover:bg-btnHoverBlack max-w-2xl h-[322px] px-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start">
        <Image src={image} alt="service icons" width={36} height={40}/>
        <h2 className="lg:text-3xl text-lg py-5">{heading}</h2>
        <p className="leading-8 text-start text-base max-w-md md:max-w-lg lg:text-2xl text-text">{service}</p>
    </section>
  )
}

export default Card