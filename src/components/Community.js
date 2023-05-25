import Resume from "./../assets/description/Resume.png";
import Innovation from "./../assets/description/Innovation.png";
import DollarCoin from "./../assets/description/DollarCoin.png";
import People from "./../assets/description/People.png";
import Lawyer from "./../assets/description/Lawyer.png";
import UserShield from "./../assets/description/UserShield.png";
import Talent from "./Custom/Talent";
import Link from "next/link";

const Community = () => {
  return (
    <div>
      <div className=" mx-auto container lg:pt-44 md:pt-32 pt-20 flex flex-col lg:justify-center items-start justify-start lg:items-center md:px-10 px-5">
        <div className="flex flex-col lg:text-center">
          <p className="font-medium lg:text-5xl text-3xl  text-white">
            Join Our Community
          </p>
          <p className="lg:text-xl max-w-2xl text-base font-light text-headerGrey py-8">
            Innovotio has an active community to provide support for recruiters,
            organizations and provide tech talent management.
          </p>{" "}
          <Link href="https://forms.gle/WPHUWJbAEGuT5KBA9" legacyBehavior>
            <a target="_blank">
              <button className="bg-primaryYellow h-11 text-black font-medium w-56 rounded-md text-lg">
                Join innovotio family
              </button>
            </a>
          </Link>
        </div>
        <div className=" justify-between pt-14">
          <div className="lg:font-normal grid lg:grid-cols-3 gap-4 grid-col-1 leading-10 lg:text-base lg:text-white lg:text-left ">
            <Talent
              image={Resume}
              text="Unrestricted access to a wide range of specific tech talents"
            />
            <Talent
              image={People}
              text="Vast & Diverse range of world-class experienced recruiters."
            />
            <Talent
              image={Innovation}
              text="A  large network of tech organizations and founders."
            />
            <Talent
              image={Lawyer}
              text="Regular staff monitoring and evaluation"
            />

            <Talent image={DollarCoin} text="Valuable soft skills training " />
            <Talent image={UserShield} text="Resume & LinkedIn optimization" />
            <Talent image={Lawyer} text="Mock interview sessions" />
            <Talent image={UserShield} text="Talent Building and Maintenance" />
            <Talent
              image={UserShield}
              text="Access to a growing network of industry peers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
