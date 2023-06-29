import Link from "next/link";
import React from "react";

const Tal = () => {
  return (
    <nav className="w-5/6 2xl:mx-auto 2xl:left-28 2xl:container 2xl:max-w-5xl  text-white 2xl:w-full right-28 z-50 cursor-pointer h-52 bg-black items-center rounded-xl border-headerGrey absolute top-20 justify-between flex border border-opacity-30">
      <div className="w-3/6  hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a target="_blank" href="/jobapplication">
          <>
            <h3 className="text-xl mb-2">Join Innovotio</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              We work as an extension of your in-house team and assemble the
              right team members for every task and project.
            </p>
          </>
        </a>
      </div>

      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <a  href="/aboutus/#community">
          <>
            <h3 className="text-xl mb-2">Community</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              Innovotio has an active community to provide support for
              recuiters, organizations and provode tech talent management.
            </p>
          </>
        </a>
      </div>
      <div className="w-3/6 hover:bg-btnHoverBlack overflow-hidden px-10  h-full py-10">
        <Link href="/programstraining">
          <>
            <h3 className="text-xl mb-2">Programs Training</h3>
            <p className="text-sm w-11/12 text-headerGrey">
              Get started with a tech skill using our one month introductory
              training program. Get introduced to all the basics necessary to
              start a career in tech.
            </p>
          </>
        </Link>
      </div>
    </nav>
  );
};

export default Tal;
