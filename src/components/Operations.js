import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/YellowBtn";

function Operations() {
  return (
    <section className=" mx-auto container text-white lg:pt-44 pt-24 leading-tight px-8 flex flex-col items-center text-center justify-center">
      <h1 className=" text-3xl font-medium w-12/12 md:w-10/12 lg:w-9/12 lg:text-5xl tracking-wide">
        Scale Your Design & Dev Operations Without The Complexity
      </h1>
      <p className="text-base lg:text-lg md:w-8/12 lg:w-5/12 font-light w-full py-8 tracking-normal leading-7">
        Why would you chase random freelancers if you could have your own
        creative dream team today?
      </p>
      <div className="flex lg:flex-row flex-col ">
        <BlackBtn text="Join Innovotio" />
        <div className="lg:mt-0 mt-5 lg:ml-10">
        <YellowBtn text="Hire a talent" />
        </div>
      </div>
    </section>
  );
}

export default Operations;
