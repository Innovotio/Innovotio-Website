import React from "react";

const BlackBtn = ({ text }) => {
  return (
    <button className="bg-btnDefaultBlack text-white h-10 w-44 rounded-md font-medium text-lg">
      {text}
    </button>
  );
};

export default BlackBtn;
