import React from "react";

const Button = ({className, children}) => {
  return (
    <button className={`${className} h-12 w-52  font-medium rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
