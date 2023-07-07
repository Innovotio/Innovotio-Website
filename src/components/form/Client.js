import React from "react";
import Logo from "../../assets/footer/Vector.svg";
import Arrow from "../../assets/form/arrow.svg";
import formImage from "../../assets/form/Account.svg";
import Image from "next/image";
import Link from "next/link";
import Copyright from "../Copyright/Copyright";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Client = () => {
  const submit = React.useRef(null);
  const router = useRouter();

  const [mail, setMail] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    services: "",
    talent: "",
    merch: "",
    message: "",
  });

  let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail?.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("client", JSON.stringify(mail));

    if (
      isValidEmail &&
      submit.current &&
      mail.firstName !== "" &&
      mail.lastName !== "" &&
      mail.email !== "" &&
      mail.phoneNumber !== "" &&
      mail.role !== "" &&
      mail.services !== ""
    ) {
      try {
        await emailjs.sendForm(
          "service_x0315xp",
          "template_8i4268f",
          submit.current,
          "q93MfdC_cYz7OHwTw"
        );
        toast.success(
          "Thank you! Your request has been successfully submitted."
        );
        setTimeout(() => {
          router.push("/");
          localStorage.removeItem("client");
        }, 3000);
      } catch (error) {
        toast.error(
          "Oops! An unexpected error occurred. Please try again later."
        );
      }
    } else {
      toast.error(
        "Oops! Please select the services you would like us to offer."
      );
    }
  };

  React.useEffect(() => {
    const formObject = JSON.parse(localStorage.getItem("client"));
    if (formObject) {
      setMail(formObject);
    }
  }, []);

  return (
    <>
      <section className="flex bg-form w-12/12 2xl:mx-auto 2xl:container">
        <section className="w-3/12 hidden bg-side pt-10 py-8 px-10 md:px-4 md:flex flex-col justify-between">
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
            <Link href="/">
              <Image
                src={formImage}
                alt="chart"
                width={500}
                height={500}
                className=""
              />
            </Link>
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

            <form className="bg-form" onSubmit={handleSubmit} ref={submit}>
              <div className="grid xl:grid-cols-2">
                <input
                  type="text"
                  value={mail.firstName}
                  name="form_firstName"
                  onChange={(e) =>
                    setMail({ ...mail, firstName: e.target.value })
                  }
                  placeholder="First Name *"
                  required
                  className="w-11/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  value={mail.lastName}
                  name="form_lastName"
                  onChange={(e) =>
                    setMail({ ...mail, lastName: e.target.value })
                  }
                  placeholder="Last Name *"
                  required
                  className="w-11/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  value={mail.email}
                  name="form_email"
                  onChange={(e) => setMail({ ...mail, email: e.target.value })}
                  placeholder="Email Address *"
                  required
                  className="w-11/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="number"
                  value={mail.phoneNumber}
                  name="form_phoneNumber"
                  onChange={(e) =>
                    setMail({ ...mail, phoneNumber: e.target.value })
                  }
                  placeholder="Phone Number *"
                  required
                  className="w-11/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  value={mail.role}
                  name="form_role"
                  onChange={(e) => setMail({ ...mail, role: e.target.value })}
                  placeholder="Current Job Role *"
                  required
                  className="w-11/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />

                <select
                  required
                  value={mail.services}
                  name="form_services"
                  onChange={(e) =>
                    setMail({ ...mail, services: e.target.value })
                  }
                  className="w-11/12 h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12 xl:w-96"
                >
                  <option>Services Required</option>
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
                  value={mail.talent}
                  name="form_talent"
                  onChange={(e) => setMail({ ...mail, talent: e.target.value })}
                  className="w-12/12 h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12 lg:w-11/12"
                >
                  <option>Talent Pool Stack</option>
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
                  value={mail.merch}
                  name="form_merch"
                  onChange={(e) => setMail({ ...mail, merch: e.target.value })}
                  className="w-12/12 h-14 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-12 lg:w-11/12"
                >
                  <option>Merchadise Needed</option>
                  <option>T-Shirts</option>
                  <option>Water Bottle</option>
                  <option>Hoodies</option>
                  <option>Stickers</option>
                  <option>Jotters</option>
                  <option>Boxes</option>
                  <option>Red Carpet Banner</option>
                  <option>Tags</option>
                  <option>Lot more</option>
                </select>

                <textarea
                  value={mail.message}
                  name="form_message"
                  onChange={(e) =>
                    setMail({ ...mail, message: e.target.value })
                  }
                  placeholder="Looking to get more services from us? Kindly drop a message"
                  className="w-12/12 h-36 text-slate-400 rounded-md  mb-8 px-2 py-2 lg:h-40 lg:w-11/12"
                />
              </div>

              <div className="lg:w-11/12 w-12/12 mt-5 mb-24 bg-Darkgray h-12 rounded-md flex justify-center">
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

export default Client;
