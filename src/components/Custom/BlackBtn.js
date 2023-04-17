import Link from "next/link";
import React from "react";

const BlackBtn = ({ text }) => {
  return (
    <Link href="/community" legacyBehavior>
      <button className="bg-btnDefaultBlack hover:bg-zinc-700 text-white h-10 w-40 rounded-md font-medium text-lg">
        {text}
      </button>
    </Link>
  );
};

export default BlackBtn;
