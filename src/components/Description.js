import BlackBtn from "./Micro/Button/BlackBtn";
import YellowBtn from "./Micro/Button/YellowBtn";
import Talent from "./Micro/Custom/Talent";
import {
  BsClipboardData,
  BsBookmarkCheck,
  BsPersonWorkspace,
  BsPeople,
} from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { FaPeopleArrows } from "react-icons/fa";

const Description = () => {
  return (
    <div data-aos="zoom-out-left">
      <div className="mx-auto container lg:pt-40 md:pt-32 pt-20 flex md:px-10 px-5 lg:flex-row xl:justify-center md:items-center flex-col">
        <div className="flex flex-col md:w-full xl:w-5/12 lg:w-5/12">
          <p className="font-medium lg:text-5xl text-3xl lg:w-full  text-white">
            Why Choose Innovotio?
          </p>
          <p className=" lg:text-xl md:text-base text-base max-w-md font-light lg:font-medium lg:text-headerGrey lg:pb-6 py-4">
            Innovotio goes beyond connecting qualified tech talents and
            organizations.
          </p>
          <div className=" flex flex-row lg:pt-0 py-3">
            <BlackBtn text="Join Innovotio" />
            <div className="lg:ml-10 ml-2 ">
              <YellowBtn text="Experience us" />
            </div>
          </div>
        </div>

        <div className=" xl:w-7/12 justify-between pl-5 lg:pt-0 pt-10">
          <div className="lg:font-normal grid md:grid-cols-2 gap-10 grid-col-1 lg:text-base lg:text-white lg:text-left ">
            <Talent
              icon={<BsClipboardData className="w-5 h-6" />}
              text="Extensive & Fast Hiring of tech talents within 72 hours"
            />
            <Talent
              icon={<BsPeople className="w-5 h-6" />}
              text="We find, manage & keep training only the best talents"
            />
            <Talent
              icon={<FaPeopleArrows className="w-5 h-6" />}
              text="A wide range of experienced talents available & within reach"
            />
            <Talent
              icon={<BsPersonWorkspace className="w-5 h-6" />}
              text="Easy access world class tech talent for Full-Time, Remote or Hybrid Roles"
            />
            <Talent
              icon={<CiDollar className="w-6 h-7" />}
              text="Handle all billing-related support queries for you"
            />
            <Talent
              icon={<BsBookmarkCheck className="w-5 h-6" />}
              text="Proper vetting of numerous applications to find the finest talent for our clients"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
