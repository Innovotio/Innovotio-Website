import Image from "next/image";
import Quotation from "./../assets/description/Quotation.png";
import Client from "./../assets/description/ClientPicture.png";
import Adiva from "./../assets/description/ADIVA.png";
import Afit from "./../assets/description/AFIT.png";
import Carbon from "./../assets/description/Carbon.png";

const Testimonial = () => {
  return (
    <div className=" mx-auto container lg:pt-40 md:pt-32 pt-20 flex text-center xl:px-0 px-5 justify-center items-center flex-col">
      <div className="lg:flex pb-8 ">
        <Image alt="quotation mark" src={Quotation} width={60} />
      </div>
      <p className="font-light lg:text-2xl md:text-xl max-w-2xl text-base text-white">
        We partnered with Innovotio to build out our core engineering team and
        we couldn't be more thrilled! Innovotio's pool of high-quality,
        motivated and entrepreneurial engineers was a game-changer during the
        critical phases of launching our startup. We are excited to work closely
        with Innovotio to keep on expanding our team and growing together!
      </p>
      <div className=" flex lg:flex-row   items-center lg:items-start  lg:space-x-3 pt-12">
        <div className="">
          <Image alt="client" src={Client} />
        </div>
        <div className=" ml-6 flex items-start flex-col">
          <p className="lg:font-normal lg:text-base lg:text-white">
            Stella Damacus
          </p>
          <div className="flex flex-row lg:max-w-md max-w-full justify-between lg:space-x-3 lg:font-normal lg:text-base text-sm text-headerGrey">
            <p>Editor-in-chief</p>
            <div className="font-light lg:mx-0 mx-2">|</div>
            <p>Adiva networks</p>
          </div>
        </div>
      </div>
      <div className="lg:flex md:flex-row flex-col  gap-10 lg:justify-center lg:pt-20 pt-12 flex justify-between">
        <Image src={Adiva} alt="adiva" width={106} height={62} />
        <Image src={Afit} alt="afit" width={119} height={24} />
        <Image src={Carbon} alt="carbon" width={100} height={25} />
      </div>
    </div>
  );
};

export default Testimonial;
