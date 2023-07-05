import Link from "next/link";
import React from "react";

const Abt = () => {
  return (
    <nav className="w-5/6 2xl:mx-auto 2xl:left-28 2xl:container 2xl:max-w-5xl  right-28 z-50 cursor-pointer text-white h-52 bg-black items-center rounded-xl border-headerGrey absolute top-20 justify-between flex border border-opacity-30">
      <Link
        href="/aboutus"
        className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10"
      >
        <>
          <h3 className="text-xl mb-2">Who We Are</h3>
          <p className="text-sm w-11/12  text-headerGrey">
            We go beyond connecting tech talents to businesses and offer
            additional services for businesses and our talent pool.
          </p>
        </>
      </Link>
      <Link
        target="_blank"
        href="http://bit.ly/Innovotio"
        className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10 h-full py-10"
      >
        <>
          <h3 className="text-xl mb-2">Careers</h3>
          <p className="text-sm w-11/12  text-headerGrey">
            Put your best foot forward and fast track landing a new tech job
            with innovotio
          </p>
        </>
      </Link>
      <Link
        href="/"
        className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10 h-full py-10"
      >
        <>
          <h3 className="text-xl mb-2">Blogs</h3>
          <p className="text-sm w-11/12 text-headerGrey">
            Read the articles on community building, talents testimonials and
            get business tips too on our blog.
          </p>
        </>
      </Link>
    </nav>
  );
};

export default Abt;
