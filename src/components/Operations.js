import Button from "./Custom/Button";

function Operations() {
  return (
    <section className="pt-40 flex flex-col items-center text-center justify-center">
      <h1 className="text-4xl font-medium w-12/12 lg:w-9/12 lg:text-5xl tracking-wide">
        Scale Your Design & Dev Operations Without The Complexity
      </h1>
      <p className="text-lg lg:w-5/12 w-10/12 py-8 tracking-normal leading-7">
        Why would you chase random freelancers if you could have your own
        creative dream team today?
      </p>
      <div className="flex justify-between w-96">
        <button className="bg-btnDefaultBlack text-white h-10 w-44 rounded-md font-medium text-lg" >Join Innovotio</button>
        <button className="bg-primaryYellow h-10 text-black font-medium w-44 rounded-md text-lg">Hire a talent</button>
      </div>
    </section>
  );
}

export default Operations;
