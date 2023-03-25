import Image from "next/image";
const Talent = ({image, text}) => {
  return (
    <div className="lg:mb-16 lg:flex flex flex-row lg:flex-row lg:space-x-4 w-11/12">
      <Image src={image} alt="resume" className="lg:w-6 lg:h-6 w-8 h-8" />
      <p className="flex items-start justify-start text-start pl-6">{text}</p>
    </div>
  );
};

export default Talent;
