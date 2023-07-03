import Resume from "../../assets/description/Resume.png";
import Innovation from "../../assets/description/Innovation.png";
import DollarCoin from "../../assets/description/DollarCoin.png";
import People from "../../assets/description/People.png";
import Lawyer from "../../assets/description/Lawyer.png";
import UserShield from "../../assets/description/UserShield.png";
import Talent from "../Micro/Custom/Talent";
import Link from "next/link";
import {
  BsClipboardData,
  BsFillAwardFill,
  BsBookmarkCheck,
  BsPersonWorkspace,
  BsPeople,
} from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaPeopleArrows, FaPeopleCarry } from "react-icons/fa";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import Button from "../Micro/Button/Button";

const Community = () => {
  return (
    <div id="community">
      <div className=" mx-auto container lg:pt-36 md:pt-28 pt-16 flex flex-col lg:justify-center items-start justify-start lg:items-center md:px-10 px-5">
        <div className="flex flex-col lg:text-center" data-aos="zoom-in-left">
          <p className="font-medium lg:text-5xl text-3xl  text-white">
            Our Community
          </p>
          <p className="lg:text-xl max-w-2xl text-base font-light text-headerGrey py-8">
            Innovotio has an active community to provide support for recruiters,
            organizations and provide tech talent management.
          </p>

          <Link href="http://bit.ly/Innovotio" legacyBehavior>
            <a target="_blank">
              <Button className="mb-3 bg-gray-100 text-black text-lg lg:ml-5">
                Join innovotio
              </Button>
            </a>
          </Link>
        </div>
        <div className=" justify-between pt-14" data-aos="zoom-in-right">
          <div className="lg:font-normal grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-col-1 leading-10 lg:text-base lg:text-white lg:text-left ">
            <Talent
              icon={<BsClipboardData className="w-5 h-6" />}
              text="Unrestricted access to a wide range of specific tech talents"
            />
            <Talent
              icon={<BsPeople className="w-5 h-6" />}
              text="Vast & Diverse range of world-class experienced recruiters."
            />
            <Talent
              icon={<FaPeopleArrows className="w-5 h-6" />}
              text="A network of tech organizations and founders."
            />
            <Talent
              icon={<BsPersonWorkspace className="w-5 h-6" />}
              text="Regular staff monitoring and evaluation"
            />

            <Talent
              icon={<MdOutlineAssuredWorkload className="w-5 h-6" />}
              text="Valuable soft skills training "
            />
            <Talent
              icon={<CiLinkedin className="w-6 h-7" />}
              text="Resume & LinkedIn optimization"
            />
            <Talent
              icon={<BsFillAwardFill className="w-5 h-6" />}
              text="Mock interview sessions"
            />
            <Talent
              icon={<BsPeople className="w-5 h-6" />}
              text="Talent Building and Maintenance"
            />
            <Talent
              icon={<FaPeopleCarry className="w-5 h-6" />}
              text="Access to a growing network of industry peers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
