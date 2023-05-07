import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/YellowBtn";

function Operations() {
  return (
    <section className="flex-col lg:flex-row lg:items-center lg:justify-evenly border-t border-b mx-auto container text-white lg:mt-40 py-14 border-btnDefaultBlack leading-tight px-8 flex ">
      <div>
      <h1 className=" text-3xl font-medium max-w-lg lg:max-w-xl lg:text-5xl tracking-wide">
      Get swift and efficient career and business support      </h1>
      <p className="text-base lg:text-lg max-w-md font-light w-full py-8 tracking-normal leading-7">
        Why would you chase random freelancers if you could have your own
        creative dream team today?
      </p>
      </div>
      <div className="flex flex-row">
        <BlackBtn text="Join Innovotio" />
        <div className="lg:mt-0 ml-5 lg:ml-10">
        <YellowBtn text="Hire a talent" />
        </div>
      </div>
    </section>
  );
}

export default Operations;
