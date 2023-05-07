import Image from "next/image";
import React from "react";
import creative from "../assets/programs/creative.svg";

const Training = () => {
  const courses = [
    { id: 1, title: "Content Writing" },
    { id: 2, title: "Content Writing" },
    { id: 3, title: "Content Writing" },
    { id: 4, title: "Content Writing" },
    { id: 5, title: "Content Writing" },
    { id: 6, title: "Content Writing" },
    { id: 7, title: "Content Writing" },
    { id: 8, title: "Content Writing" },
    { id: 9, title: "Content Writing" },

  ];

  return (
    <section className="text-white lg:pt-40 pt-16 flex lg:flex-row flex-col-reverse justify-between px-5 xl:px-0 container mx-auto lg:items-center">
      <div className="">
        <Image src={creative} alt="coding" width={450} height={450} />
      </div>
      <div>
        <div className="lg:pl-6 pl-0 xl:pl-0">
          <h1 className="md:text-3xl text-2xl font-medium">
            1-month introductory training program
          </h1>
          <p className="max-w-xl font-light text-lg text-headerGrey py-5">
            Get started with a tech skill using our one-month introductory
            training program. Get introduced to all the basics necessary to
            start a career in tech
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 hidden gap-5 pt-5">
          {courses.map((course) => (
            <button className="bg-btnHoverBlack w-[202px] h-[44px] rounded-sm">{course.title}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
