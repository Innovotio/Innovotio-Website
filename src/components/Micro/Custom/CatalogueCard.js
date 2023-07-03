import React from "react";
import Link from "next/link";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";
import Modal, { ModalContent } from "../Modal";
import { AiOutlineClose } from "react-icons/ai";

const CatalogueCard = ({ icon, heading, service, data, name }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <section className="cursor-pointer hover:bg-btnHoverYellow hover:text-black lg:max-w-[425px] max-w-full p-5 justify-center border rounded-2xl border-btnDefaultBlack flex flex-col items-start">
      <div className="flex items-center">
        <div>{icon}</div>
        <h2 className="lg:text-lg font-medium ml-2 text-lg">{heading}</h2>
      </div>
      <p className="leading-8 text-start font-medium text-base max-w-full lg:max-w-md md:max-w-lg md:text-sm py-5 text-Darkgray">
        {service}
      </p>
      <div
        className="font-medium py-3"
        onClick={() => setModal(true)}
      >
        <div className="underline-hover flex items-center">
          View Curriculum <BsBoxArrowUpRight className="font-medium w-8 " />
        </div>
      </div>
      <Link href="https://forms.gle/Ky3UX3oUabK3Xm6a7" legacyBehavior>
        <a
          target="_blank"
          className="font-medium flex items-center underline-hover"
        >
          Register Now <BsArrowRight className="font-medium w-8" />{" "}
        </a>
      </Link>
      <style jsx>{`
        .hover\:text-black:hover p {
          color: black;
        }
        .underline-hover {
          position: relative;
        }

        .underline-hover:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: black;
          transition: width 0.3s ease-in-out;
        }

        .underline-hover:hover:after {
          width: 100%;
        }
      `}</style>
      <PopUp
        modal={modal}
        handleModal={() => setModal(false)}
        data={data}
        name={name}
      />
    </section>
  );
};

export default CatalogueCard;

const PopUp = ({ modal, handleModal, data, name }) => {
  return (
    <Modal open={modal} onClose={handleModal} className="bg-btnHoverBlack ">
      <ModalContent className="bg-btnHoverBlack text-white md:w-[700px] w-[360px] overflow-y-scroll px-5 rounded-2xl h-[85vh] text-xs md:text-sm flex flex-col justify-between text-center">
        <section>
          <div className="flex items-center justify-between">
            <h1 className="text-lg md:text-xl text-start py-7 font-medium">
              {name}
            </h1>
            <div
              onClick={handleModal}
              className="text-lg bg-white text-black h-7 w-7 rounded-full flex items-center justify-center"
            >
              <AiOutlineClose />
            </div>
          </div>
          <table className="flex flex-col text-start">
            <thead className="border-b border-t border-zinc-700 ">
              <tr className="w-12/12 flex text-base md:text-lg font-medium justify-between h-12 items-center">
                <th className="w-3/12 text-start">MODULE</th>
                <th className="w-9/12 text-start border-l h-full items-center flex px-5 border-zinc-700 ">
                  TOPICS
                </th>
              </tr>
            </thead>
            <tbody className="">
              {data?.map((item, index) => (
                <tr key={index} className="border-b border-zinc-700">
                  <td className="w-3/12 py-5">{item.module}</td>
                  <td
                    dangerouslySetInnerHTML={{ __html: item.topics }}
                    className="w-9/12 py-5 border-zinc-700 border-l px-5"
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </ModalContent>
    </Modal>
  );
};
