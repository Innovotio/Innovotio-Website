import Resume from "./../assets/description/Resume.png";
import Innovation from "./../assets/description/Innovation.png";
import DollarCoin from "./../assets/description/DollarCoin.png";
import People from "./../assets/description/People.png";
import Lawyer from "./../assets/description/Lawyer.png";
import UserShield from "./../assets/description/UserShield.png";
import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/YellowBtn";
import Talent from "./Custom/Talent";

const Description = () => {
  return (
    <>
      <div>
        <div className="mx-auto container lg:pt-40 md:pt-32 pt-14 flex px-8 xl:flex-row xl:justify-center xl:items-center flex-col">
          <div className="flex flex-col xl:w-5/12 lg:w-5/12">
            <p className="font-medium lg:text-5xl text-3xl lg:w-full  text-white">
              Why Choose Innovotio?
            </p>
            <p className=" lg:text-xl md:text-base text-base max-w-md font-light lg:font-medium lg:text-headerGrey lg:pb-6 py-4">
              Innovotio goes beyond connecting qualified tech talents and
              organizations.
            </p>
            <div className=" flex flex-row lg:pt-0 py-3">
              <BlackBtn text="Join Innovotio" />
              <div className="lg:ml-10 ml-6">
                <YellowBtn text="Experience us" />
              </div>
            </div>
          </div>
          <div className=" xl:w-7/12 justify-between pl-5 lg:pt-0 pt-10">
            <div className="lg:font-normal grid lg:grid-cols-2 gap-10 grid-col-1  lg:text-base lg:text-white lg:text-left ">
              <Talent
                image={Resume}
                text="Extensive & Fast Hiring of tech talents within 72 hours"
              />
              <Talent
                image={People}
                text="We find, manage & keep training only the best talents"
              />
              <Talent
                image={Innovation}
                text="A wide range of experienced talents available & within reach"
              />
              <Talent
                image={Lawyer}
                text="Easy access world class tech talent for Full-Time, Remote or Hybrid Roles"
              />
              <Talent
                image={DollarCoin}
                text="Handle all billing-related support queries for you"
              />
              <Talent
                image={UserShield}
                text="Proper vetting of numerous applications to find the finest talent for our clients"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
