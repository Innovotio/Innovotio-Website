import Resume from "./../assets/description/Resume.png";
import Innovation from "./../assets/description/Innovation.png";
import DollarCoin from "./../assets/description/DollarCoin.png";
import People from "./../assets/description/People.png";
import Lawyer from "./../assets/description/Lawyer.png";
import UserShield from "./../assets/description/UserShield.png";
import Talent from "./Custom/Talent";

const Community = () => {
  return (
    <div>
      <div className=" mx-auto container pt-24 lg:pt-44 flex px-8 xl:flex-row xl:justify-center xl:items-center flex-col">
        <div className="flex flex-col xl:w-5/12 lg:w-5/12">
          <p className="font-medium lg:text-4xl text-3xl lg:w-full  text-white">
            Join Our Community
          </p>
          <p className=" lg:text-lg md:text-lg text-base lg:w-96 w-full font-light text-headerGrey lg:pb-8 py-8">
            Innovotio goes beyond connecting qualified tech talents and
            organizations.
          </p>{" "}
          <button className="bg-primaryYellow h-11 text-black font-medium w-56 rounded-md text-lg">
            Join innovotio family
          </button>
        </div>
        <div className=" xl:w-7/12 justify-between pt-14">
          <div className="lg:font-normal grid lg:grid-cols-2 gap-2 grid-col-1 leading-10 lg:text-base lg:text-white lg:text-left ">
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
           
            <Talent
              image={DollarCoin}
              text="Valuable soft skills training "
            />
              <Talent
              image={UserShield}
              text="Resume & LinkedIn optimization"
            />
             <Talent
              image={Lawyer}
              text="Mock interview sessions"
            />
            <Talent
              image={UserShield}
              text="Talent Building and Maintenance"
            />
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
