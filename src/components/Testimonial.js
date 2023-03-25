import Image from "next/image"
import Quotation from "./../assets/description/Quotation.png"
import Client from "./../assets/description/ClientPicture.png"
import Adiva from "./../assets/description/ADIVA.png"
import Afit from "./../assets/description/AFIT.png"
import Carbon from "./../assets/description/Carbon.png"

const Testimonial = () => {
  return (
    <div className="container mx-auto pt-20 flex text-center justify-center items-center flex-col">
    <div className="lg:flex pb-8 ">
      <Image alt='quotation mark' src={Quotation} width={60}/>
    </div>
<p className="lg:font-normal lg:text-2xl lg:w-6/12 w-12/12 text-lg text-white">
    We partnered with Innovotio to build out our core engineering team and we couldn't be more thrilled! Innovotio's pool of high-quality, motivated and entrepreneurial engineers was a game-changer during the critical phases of launching our startup. We are excited to work closely with Innovotio to keep on expanding our team and growing together!
    </p> 
    <div className=" flex lg:flex-row flex-col  items-center lg:items-start  lg:space-x-3 pt-12">
      <div className="">
      <Image alt='client' src={Client}/>
      </div>
      <div  className="flex lg:items-start flex-col">
        <p className="lg:font-normal lg:text-base lg:text-white">Stella Damacus</p>
        <div className="flex lg:flex-row w-64 justify-between lg:space-x-3 lg:font-normal lg:text-base lg:text-headerGrey">
        <p>Editor-in-chief</p>
        <p>Adiva networks</p>
        </div>
        
      </div>

    </div>
    <div className="lg:flex lg:flex-row space-x-16 lg:justify-center pt-10 flex justify-between">
        <Image src={Adiva} alt='adiva' width={90} height={40}/>
        <Image src={Afit} alt='afit' width={90} height={40}/>
        <Image src={Carbon} alt='carbon' width={90} height={40}/>
      </div>
  </div>  )
}

export default Testimonial