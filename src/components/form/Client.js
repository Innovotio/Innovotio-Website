import React from "react";
import Logo from "../../assets/footer/Vector.svg";
import Arrow from "../../assets/form/arrow.svg";
import formImage from "../../assets/form/Account.svg";
import Image from "next/image";
import Link from "next/link";
import Copyright from "../Copyright/Copyright";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { AiOutlineDown } from "react-icons/ai";

const Client = () => {
  const submit = React.useRef(null);
  const [isloading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const [modal, setModal] = React.useState({
    services: false,
    merchandise: false,
    talents: false,
  });

  const [mail, setMail] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    services: {
      merchandise: false,
      talent: false,
      eventPlanning: false,
      pitchDesk: false,
      consultancy: false,
    },
    talents: {
      frontendDeveloper: false,
      backendDeveloper: false,
      digitalMarketer: false,
      productManager: false,
      communityManager: false,
      uxResearcher: false,
      contentCreator: false,
      graphicsDesginer: false,
      operationsManager: false,
      Blockchain: false,
      qaTester: false,
    },

    merchandise: {
      tee: false,
      waterBottle: false,
      hoodies: false,
      stickers: false,
      jotters: false,
      redCarpetBanner: false,
      tags: false,
    },
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail?.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      isValidEmail &&
      submit.current &&
      mail.firstName !== "" &&
      mail.lastName !== "" &&
      mail.email !== "" &&
      mail.phoneNumber !== "" &&
      mail.role !== ""
    ) {
      try {
        setIsLoading(true);
        await emailjs.sendForm(
          "service_x0315xp",
          "template_8i4268f",
          submit.current,
          "q93MfdC_cYz7OHwTw"
        );
        toast.success("Your request has been sent successfully");
        setTimeout(() => {
          router.reload();
        }, 3000);
      } catch (error) {
        setIsLoading(false);
        toast.error("Network error, please try again.", {});
      }
    } else {
      toast.error("Invalid Email address");
    }
  };

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
          <figure>
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
                  placeholder="Company/Job Role *"
                  required
                  className="w-11/12 md:w-10/12  rounded-md mb-8 px-2 py-2 h-12 lg:h-12 xl:w-96"
                />

                {/* dropdown services form */}
                <div className=" bg-white lg:w-96 w-11/12  z-10  h-12 rounded-md mb-7">
                  <div
                    className="text-slate-400  flex items-center cursor-pointer rounded-md p-3 justify-between"
                    onClick={() =>
                      setModal({ ...modal, services: !modal.services })
                    }
                  >
                    Services Required
                    <AiOutlineDown />
                  </div>

                  {modal.services ? (
                    <div className="flex flex-col rounded-b-md relative bottom-1 h-fit px-5 bg-white ">
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.services.merchandise}
                          checked={mail.services.merchandise}
                          name="form_merchandise"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              services: {
                                ...mail.services,
                                merchandise: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Merchandise
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.services.talent}
                          checked={mail.services.talent}
                          name="form_services_talent"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              services: {
                                ...mail.services,
                                talent: e.target.checked,
                              },
                            })
                          }
                          className=" w-6 h-6 mr-2 text-black bg-black"
                        />
                        Talent Pool
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.services.eventPlanning}
                          checked={mail.services.eventPlanning}
                          name="form_eventPlanning"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              services: {
                                ...mail.services,
                                eventPlanning: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Tech Event Planning
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.services.pitchDesk}
                          checked={mail.services.pitchDesk}
                          name="form_pitchDesk"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              services: {
                                ...mail.services,
                                pitchDesk: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Pitch Deck Designs
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.services.consultancy}
                          checked={mail.services.consultancy}
                          name="form_consultancy"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              services: {
                                ...mail.services,
                                consultancy: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Consultancy
                      </label>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* dropdown merchandise form */}
              <div className="flex flex-col">
                <div className=" bg-white md:w-11/12 w-12/12 h-14 rounded-md mb-7">
                  <div
                    className="w-12/12 h-14 text-slate-400 flex justify-between p-3  items-center"
                    onClick={() =>
                      setModal({ ...modal, merchandise: !modal.merchandise })
                    }
                  >
                    Merchadise Needed <AiOutlineDown />
                  </div>

                  {modal.merchandise ? (
                    <div className="flex flex-col rounded-b-md relative bottom-1 h-fit px-5 bg-white ">
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.tee}
                          checked={mail.merchandise.tee}
                          name="form_tee"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                tee: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        T-Shirts{" "}
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.waterBottle}
                          checked={mail.merchandise.waterBottle}
                          name="form_waterBottle"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                waterBottle: e.target.checked,
                              },
                            })
                          }
                          className=" w-6 h-6 mr-2 text-black bg-black"
                        />
                        Water Bottle
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.hoodies}
                          checked={mail.merchandise.hoodies}
                          name="form_hoodies"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                hoodies: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Hoodies
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.stickers}
                          checked={mail.merchandise.stickers}
                          name="form_stickers"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                stickers: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Stickers{" "}
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.jotters}
                          checked={mail.merchandise.jotters}
                          name="form_jotters"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                jotters: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Jotters
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.redCarpetBanner}
                          checked={mail.merchandise.redCarpetBanner}
                          name="form_redCarpetBanner"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                redCarpetBanner: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Red Carpet Banner
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.merchandise.tags}
                          checked={mail.merchandise.tags}
                          name="form_tags"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              merchandise: {
                                ...mail.merchandise,
                                tags: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Tags
                      </label>
                    </div>
                  ) : null}
                </div>

                {/* dropdown talent form */}
                <div className=" bg-white md:w-11/12 w-12/12 h-14 rounded-md mb-7">
                  <div
                    className="w-12/12 h-14 text-slate-400 flex justify-between p-3  items-center"
                    onClick={() =>
                      setModal({ ...modal, talents: !modal.talents })
                    }
                  >
                    Talent Pool
                    <AiOutlineDown />
                  </div>

                  {modal.talents ? (
                    <div className="flex flex-col rounded-b-md relative bottom-1 h-fit px-5 bg-white ">
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.frontendDeveloper}
                          checked={mail.talents.frontendDeveloper}
                          name="form_frontendDeveloper"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                frontendDeveloper: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2"
                        />
                        Frontend Developer
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.backendDeveloper}
                          checked={mail.talents.backendDeveloper}
                          name="form_backendDeveloper"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                backendDeveloper: e.target.checked,
                              },
                            })
                          }
                          className=" w-6 h-6 mr-2"
                        />
                        Backend Developer
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.digitalMarketer}
                          checked={mail.talents.digitalMarketer}
                          name="form_digitalMarketer"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                digitalMarketer: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2"
                        />
                        Digital Marketer
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.productManager}
                          checked={mail.talents.productManager}
                          name="form_productManager"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                productManager: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2"
                        />
                        Product Marketer
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.communityManager}
                          checked={mail.talents.communityManager}
                          name="form_communityManager"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                communityManager: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2"
                        />
                        Community Manager
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.uxResearcher}
                          checked={mail.talents.uxResearcher}
                          name="form_uxResearcher"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                uxResearcher: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2"
                        />
                        UX Researcher
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.graphicsDesginer}
                          checked={mail.talents.graphicsDesginer}
                          name="form_graphicsDesigner"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                graphicsDesginer: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2"
                        />
                        Graphics Designer
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.operationsManager}
                          checked={mail.talents.operationsManager}
                          name="form_operationsManager"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                operationsManager: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Operations Manager
                      </label>
                      <label className="items-center flex py-2">
                        <input
                          type="checkbox"
                          value={mail.talents.qaTester}
                          checked={mail.talents.qaTester}
                          name="form_qaTester"
                          onChange={(e) =>
                            setMail({
                              ...mail,
                              talents: {
                                ...mail.talents,
                                qaTester: e.target.checked,
                              },
                            })
                          }
                          className="w-6 h-6 mr-2 text-black bg-black"
                        />
                        Quality Assurance Tester
                      </label>
                    </div>
                  ) : null}
                </div>
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

export default Client;
