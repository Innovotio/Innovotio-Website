import Image from "next/image";

const Talent = ({ icon, text }) => {
  return (
    <div className=" text-gray-200 lg:mb-7 max-w-sm  mb-5 lg:flex flex flex-row lg:flex-row">
      <div className="text-gray-100">{icon}</div>
      <p className=" flex items-start justify-start text-start max-w-xs md:text-lg text-base lg:text-lg pl-3">
        {text}
      </p>
    </div>
  );
};

export default Talent;
