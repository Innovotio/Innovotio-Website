import BlackBtn from "../Micro/Button/BlackBtn";
import YellowBtn from "../Micro/Button/YellowBtn";

function Operations() {
  return (
     <section className="mx-auto container flex-col lg:flex-row lg:items-center lg:justify-evenly border-t border-b px-5 text-white lg:mt-32 md:mt-24 mt-14 py-12 border-btnDefaultBlack leading-tight flex ">
      <div data-aos="fade-right">
        <h1 className=" text-3xl font-medium max-w-lg lg:max-w-xl lg:text-5xl tracking-wide">
          Get swift and efficient career and business support{" "}
        </h1>
        <p className="text-base text-gray lg:text-lg max-w-md md:max-w-xl lg:max-w-md font-light w-full py-8 tracking-normal leading-7">
          Why would you chase random freelancers if you could have your own
          creative dream team today?
        </p>
      </div>
      <div data-aos="fade-left" 
      className="flex flex-row">
        <BlackBtn text="Join Innovotio" />
        <div className="lg:mt-0 ml-2 lg:ml-10">
          <YellowBtn text="Hire a talent" />
        </div>
      </div>
    </section>
  );
}

export default Operations;
