import Image from "next/image";
const Talent = ({image, text}) => {
  return (
    <div className=" text-headerGrey lg:mb-7 mb-5 lg:flex flex flex-row lg:flex-row lg:space-x-4">
      <Image src={image} alt="resume" className="lg:w-8 lg:h-8 w-8 h-8" />
      <p className=" flex items-start justify-start text-start md:text-lg text-base lg:text-base pl-6">{text}</p>
    </div>
  );
};

export default Talent;
