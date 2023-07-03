import Link from "next/link";
import Brand from "../Micro/Custom/Brand";
import Button from "../Micro/Button/Button";

const Header = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="xl:pt-52 lg:pt-24 pt-14 px-5">
          <div
            className="flex justify-center items-center px-4 flex-col text-center w-full"
            data-aos="fade-up"
          >
            <h1 className="md:text-6xl lg:text-6xl text-4xl lg:max-w-4xl max-w-xl leading-10 font-medium text-white">
              Get qualified tech talents & event support
            </h1>
            <p className=" md:text-xl max-w-md md:max-w-2xl leading-7 text-base px-4 lg:font-normal py-7 text-headerGrey">
              We provide qualified tech talents to hiring organizations,
              organize tech events and curate branded merchandise.
            </p>
            <div className="flex lg:flex-row flex-col lg:justify-center lg:gap-4">
              <Link href="/aboutus/#community" legacyBehavior>
                <a target="_blank">
                  <Button className="bg-btnDefaultBlack text-white mt-4 lg:mt-0 text-lg">
                    Join Innovotio
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          <div className="lg:pt-28  flex-col lg:flex hidden justify-center items-center">
            <div className="flex justify-center text-center items-center flex-col ">
              <p className="lg:font-normal font-light lg:text-2xl text-xl lg:leading-10 py-3 text-text ">
                Trusted by fast-moving clients worldwide
              </p>
              <Brand />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
