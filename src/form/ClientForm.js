import Logo from "../assets/footer/Vector.svg";
import Arrow from "../assets/form/arrow.svg";
import formImage from "../assets/form/Account.svg";
import Image from "next/image";
import Link from "next/link";
import Copyright from "../components/Copyright";

const ClientForm = () => {
  return (
    <>
      <section className="flex bg-form w-12/12 2xl:mx-auto 2xl:container">
        <section className="w-3/12 hidden bg-side pt-10 py-8 px-10 md:px-4 md:flex flex-col justify-between">
          <div className="">
            <Image
              src={Logo}
              alt="Logo"
              width={140}
              height={120}
              className=""
            />
            <figcaption>
              <p className="pt-8 leading-8 text-white text-base font-medium italic">
                Your super-stop for the tech talents, tech events and swag
                items.
              </p>
            </figcaption>
          </div>
          <figure className="">
            <Image
              src={formImage}
              alt="chart"
              width={500}
              height={500}
              className=""
            />
          </figure>
        </section>
        <section className="md:w-9/12 w-full overflow-x-hidden bg-form">
          <nav className="md:hidden bg-side h-20 flex items-center px-4 ">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={140}
              height={120}
              className=""
            />
            </Link>
          </nav>
          <div className=" py-2 lg:px-10 px-4 md:px-4">
            <div className="flex items-center pt-8 ">
              <Link href="/">
                <Image
                  src={Arrow}
                  alt="chart"
                  width={20}
                  height={20}
                  className=""
                />
              </Link>
              <Link href="/">
                <p className="ml-4 cursor-pointer text-lg">Go back</p>
              </Link>
            </div>
            <h1 className="text-lg lg:text-2xl pb-8 pt-5 lg:w-full md:w-96 w-full ">
              Ready to take a chance at growth?
            </h1>
            <form className="bg-form">
              <div className="grid xl:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-10/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="w-10/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Email Address *"
                  required
                  className="w-10/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Phone Number *"
                  required
                  className="w-10/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Current Job Role *"
                  required
                  className="w-10/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />

                <select
                  required
                  className="w-11/12 h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12 xl:w-96"
                  defaultValue="default"
                >
                  <option value="default" disabled hidden>
                    Services Required
                  </option>
                  <option>Talent Pool</option>
                  <option>Tech Event Planning</option>
                  <option>Pitch Deck Designs</option>
                  <option>Consultancy</option>
                  <option>Merchandise </option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  required
                  className="w-11/12 h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12 lg:w-11/12"
                  defaultValue="default"
                >
                  <option value="default" disabled hidden>
                    Talent Pool Stack (Select all that apply)
                  </option>
                  <option>Front-End Developer</option>
                  <option>Digital Marketer</option>
                  <option>Product Manager</option>
                  <option>Community Manager</option>
                  <option>Back-End Developer</option>
                  <option>UX Researcher</option>
                  <option>Content Creator</option>
                  <option>Grpahics Designer</option>
                  <option>Operations Manager</option>
                  <option>Blockchain Developer</option>
                  <option>Quality Assurance Tester</option>
                  <option>Others</option>
                </select>

                <select
                  required
                  className="w-11/12 h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12 lg:w-11/12"
                  defaultValue="default"
                >
                  <option value="default" disabled hidden>
                    Merchadise Needed (Select all that apply)
                  </option>
                  <option>T-Shirts</option>
                  <option>Water Bottle</option>
                  <option>Hoodies</option>
                  <option>Stickers</option>
                  <option>Jotters</option>
                  <option>Boxes</option>
                  <option>Red Carpet Banner</option>
                  <option>Tags</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="lg:w-11/12 w-11/12 mt-5 mb-24 bg-gray h-12 rounded-md flex justify-center">
                <button className="">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <section className="2xl:mx-auto 2xl:container overflow-hidden py-6 lg:mt-0 pt-6 h-24 px-5 bg-side">
        <Copyright />
      </section>
    </>
  );
};

export default ClientForm;
