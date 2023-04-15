import Image from "next/image"
import Link from "next/link"
import arrow from "../../assets/services/Vector (1).svg"
const Card = ({image, heading, service}) => {
  return (
    <section className="xl:w-11/12 md:w-9/12 lg:px-10 px-8 py-8 border rounded-lg border-btnDefaultBlack flex flex-col items-start">
        <Image src={image} alt="service icons" width={30} height={30}/>
        <h2 className="lg:text-xl text-lg py-4">{heading}</h2>
        <p className="leading-7 text-start xl:w-11/12 w-12/12 text-base lg:text-lg text-text">{service}</p>
    </section>
  )
}

export default Card