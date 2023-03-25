import Image from "next/image"
import Link from "next/link"
import arrow from "../../assets/services/Vector (1).svg"
const Card = ({image, heading, service}) => {
  return (
    <section className="w-11/12 lg:px-10 px-8 py-8 border rounded-md border-btnDefaultBlack flex flex-col items-start">
        <Image src={image} alt="service icons" width={40} height={40}/>
        <h2 className="text-2xl py-4">{heading}</h2>
        <p className="leading-7 text-start lg:w-11/12 w-12/12 text-lg text-text">{service}</p>
        <div className="flex py-4 text-lg items-center">
            <Link href="/">Learn more </Link>
            <Image src={arrow} alt="service icons" width={15} height={15} className="ml-4"/>
        </div>

    </section>
  )
}

export default Card