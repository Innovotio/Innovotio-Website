import React from "react";

const Abt = () => {
  return (
    <nav className="w-5/6 2xl:mx-auto 2xl:left-28 2xl:container right-28 z-50 cursor-pointer h-52 bg-black items-center rounded-xl border-headerGrey absolute top-20 justify-between flex border border-opacity-30">
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/aboutUs">
          <>
            <h3 className="text-xl mb-2">Who We Are</h3>
            <p className="text-sm w-11/12  text-headerGrey">
              We go beyond connecting tech talents to businesses and offer
              additional services for businesses and our talent pool.
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a href="/jobapplication">
          <>
            <h3 className="text-xl mb-2">Careers</h3>
            <p className="text-sm w-11/12  text-headerGrey">
              Put your best foot forward and fast track landing a new tech job
              with innovotio
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10 h-full py-10">
        <a href="/aboutUs">
          <>
            <h3 className="text-xl mb-2">Blogs</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              Read the articles on community building, talents testimonials and
              get business tips too on our blog.
            </p>
          </>
        </a>
      </div>
    </nav>
  );
};

export default Abt;
