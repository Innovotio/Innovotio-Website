import Link from "next/link";
import BlackBtn from "../Micro/Button/BlackBtn";
import YellowBtn from "../Micro/Button/YellowBtn";

function Operations() {
  return (
    <section className="mx-auto container flex-col lg:flex-row lg:items-center lg:justify-evenly border-t border-b px-5 text-white lg:mt-32 md:mt-24 mt-14 py-12 border-btnDefaultBlack leading-tight flex ">
      <div data-aos="fade-right">
        <h1 className=" text-3xl font-medium max-w-md lg:max-w-xl lg:text-5xl tracking-wide">
          Get top quality merch and event support
        </h1>
        <p className="text-base text-gray lg:text-xl max-w-md md:max-w-xl lg:max-w-md font-light w-full py-8 tracking-normal leading-7">
          Let our team of professionals manage your events and provide branded
          merch for you
        </p>
      </div>
      <div data-aos="fade-left" className="flex flex-row">
        <Link href="/business" legacyBehavior>
          <a>
            <button className="bg-btnDefaultBlack hover:bg-zinc-700 text-white h-10 w-40 rounded-md font-medium text-lg">
              Order merch
            </button>
          </a>
        </Link>
        <div className="lg:mt-0 ml-2 lg:ml-10">
          <YellowBtn text="Contact us" />
        </div>
      </div>
    </section>
  );
}

export default Operations;
