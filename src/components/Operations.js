import BlackBtn from "./Custom/BlackBtn";
import YellowBtn from "./Custom/yellowBtn";

function Operations() {
  return (
    <section className="lg:pt-32 pt-28 flex flex-col items-center text-center justify-center">
      <h1 className="md:text-4xl text-3xl font-medium w-12/12 lg:w-9/12 lg:text-5xl tracking-wide">
        Scale Your Design & Dev Operations Without The Complexity
      </h1>
      <p className="text-lg  lg:w-5/12 w-12/12 py-8 tracking-normal leading-7">
        Why would you chase random freelancers if you could have your own
        creative dream team today?
      </p>
      <div className="flex justify-between w-96 ">
        <BlackBtn text="Join Innovotio" />
        <YellowBtn text="Hire a talent" />
      </div>
    </section>
  );
}

export default Operations;
