import React, { useReducer } from "react";
import Logo from "../../assets/footer/Vector.svg";
import Arrow from "../../assets/form/arrow.svg";
import formImage from "../../assets/form/Account.svg";
import Add from "../../assets/form/Add File.svg";
import Link from "next/link";
import Image from "next/image";
import Copyright from "../Copyright/Copyright";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Job = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const submit = React.useRef(null);
  const router = useRouter();

  const [mail, setMail] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    yearsOfExperience: "",
    resume: "",
    portfolio: "",
    inquiry: "",
    others: "",
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail?.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("talent", JSON.stringify(mail));
    if (
      isValidEmail &&
      submit.current &&
      mail.firstName !== "" &&
      mail.lastName !== "" &&
      mail.email !== "" &&
      mail.role !== "" &&
      mail.yearsOfExperience !== "" &&
      mail.resume !== "" &&
      mail.portfolio !== "" &&
      mail.fit !== ""
    ) {
      try {
        setIsLoading(true);
        await emailjs.sendForm(
          "service_5com1nc",
          "template_n9sfl9d",
          submit.current,
          "vRsFzOQ-qsC5CB4KI"
        );
        toast.success(
          "Thank you! Your request has been successfully submitted."
        );
        setIsLoading(false);
        setTimeout(() => {
          router.push("/");
          localStorage.removeItem("talent");
        }, 3000);
      } catch (error) {
        setIsLoading(false);
        toast.error(
          "Oops! An unexpected error occurred. Please try again later."
        );
      }
    } else {
      toast.error(
        "Oops! An unexpected error occurred. Please try again later."
      );
    }
  };

  React.useEffect(() => {
    const formObject = JSON.parse(localStorage.getItem("talent"));
    if (formObject) {
      setMail(formObject);
    }
  }, []);

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

            <form onSubmit={handleSubmit} ref={submit}>
              <div className="grid xl:grid-cols-2 grid-col-1">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={mail.firstName}
                  onChange={(e) =>
                    setMail({ ...mail, firstName: e.target.value })
                  }
                  name="form_firstName"
                  required
                  className="w-12/12 md:w-12/12 lg:w-11/12 rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={mail.lastName}
                  onChange={(e) =>
                    setMail({ ...mail, lastName: e.target.value })
                  }
                  name="form_lastName"
                  required
                  className="w-12/12  md:w-12/12 lg:w-11/12 rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Email Address *"
                  value={mail.email}
                  onChange={(e) => setMail({ ...mail, email: e.target.value })}
                  name="form_email"
                  required
                  className="w-12/12 md:w-12/12 lg:w-11/12 rounded-md  mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Role *"
                  value={mail.role}
                  onChange={(e) => setMail({ ...mail, role: e.target.value })}
                  name="form_role"
                  required
                  className="w-12/12 md:w-12/12 lg:w-11/12  rounded-md  mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />
                <input
                  type="text"
                  placeholder="Years of experience (years)*"
                  value={mail.yearsOfExperience}
                  onChange={(e) =>
                    setMail({ ...mail, yearsOfExperience: e.target.value })
                  }
                  name="form_yearsOfExperience"
                  required
                  className="w-12/12  md:w-12/12 lg:w-11/12  rounded-md  mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />

                <input
                  type="text"
                  value={mail.resume}
                  placeholder="resume link *"
                  onChange={(e) => setMail({ ...mail, resume: e.target.value })}
                  name="form_resume"
                  className="md:w-12/12 lg:w-11/12  bg-white xl:w-96 h-14 mb-4 lg:h-12 py-2 px-4 rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="flex flex-col w-12/12">
                <input
                  type="text"
                  placeholder="What makes you a good fit for this role? *"
                  value={mail.fit}
                  onChange={(e) => setMail({ ...mail, fit: e.target.value })}
                  name="form_fit"
                  required
                  className="lg:w-11/12 w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-14"
                />
                <input
                  type="text"
                  placeholder="Portfolio link *"
                  value={mail.portfolio}
                  onChange={(e) =>
                    setMail({ ...mail, portfolio: e.target.value })
                  }
                  name="form_portfolio"
                  required
                  className="lg:w-11/12 w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-14"
                />
                <input
                  type="text"
                  placeholder="Is there anything else you would like to let us know? "
                  value={mail.others}
                  onChange={(e) => setMail({ ...mail, others: e.target.value })}
                  name="form_others"
                  className="lg:w-11/12 w-full h-14 rounded-md  mb-8 px-2 py-2 lg:h-14"
                />
              </div>
              <div className="lg:w-11/12 w-12/12 mt-5 mb-24 bg-Darkgray h-14 rounded-md flex justify-center">
                <button className="">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      <section className="2xl:mx-auto 2xl:container overflow-hidden py-6 lg:mt-0 pt-6 h-24 px-5 bg-side">
        <Copyright />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Job;
