import Logo from "../assets/footer/Vector.svg";
import Arrow from "../assets/form/arrow.svg";
import formImage from "../assets/form/Account.svg";
import Add from "../assets/form/Add File.svg";
import Link from "next/link";

import Image from "next/image";
import Copyright from "../components/Copyright";

const ApplicationForm = () => {
  return (
    <>
      <section className="flex bg-form w-12/12 2xl:mx-auto 2xl:container 2xl:bg-form">
        <section className="md:w-3/12 hidden bg-side py-6 px-4 lg:px-10 md:flex flex-col justify-between">
          <div className="">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={140}
              height={120}
              className=""
            />
            </Link>
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
          <nav className="md:hidden bg-side h-20 flex items-center px-4">
            <Image
              src={Logo}
              alt="Logo"
              width={140}
              height={120}
              className=""
            />
          </nav>
          <div className=" py-2 lg:px-10 px-4 md:px-4">
            <div className="flex  items-center pt-8 ">
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
                <p className="ml-4 text-lg">Go back</p>
              </Link>
            </div>
            <h1 className="lg:text-2xl text-lg pb-8 pt-5 lg:w-full w-full ">
              Become the next Innovative talent
            </h1>
            <form className="">
              <div className="grid xl:grid-cols-2 grid-col-1">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-12/12 md:w-12/12 lg:w-11/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="w-12/12  md:w-12/12 lg:w-11/12 rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Email Address *"
                  required
                  className="w-12/12 md:w-12/12 lg:w-11/12 rounded-md  mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Role *"
                  required
                  className="w-12/12 md:w-12/12 lg:w-11/12  rounded-md  mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Years of experience (years) *"
                  required
                  className="w-12/12  md:w-12/12 lg:w-11/12  rounded-md  mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <label
                  for="file-upload"
                  className="flex  md:w-12/12 lg:w-11/12  items-center justify-between inline-block bg-white text-slate-400 xl:w-10/12 h-14 mb-4 lg:h-12 py-2 px-4 rounded-md cursor-pointer"
                >
                  CV/Resume
                  <Image src={Add} alt="" width={100} height={40} />
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              <div className="flex flex-col w-12/12">
                <input
                  type="text"
                  placeholder="What makes you a good fit for this role?"
                  required
                  className="lg:w-11/12 w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Portfolio link *"
                  required
                  className="lg:w-11/12 w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-12"
                />
                <input
                  type="text"
                  placeholder="Is there anything else you would like to let us know? *"
                  required
                  className="lg:w-11/12 w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-12"
                />
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

export default ApplicationForm;
