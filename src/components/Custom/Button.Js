import React from 'react';

const Button = ({ text, className, onClick }) => {
  const btnClass =
    `font-medium bg-red text-xl py-3 w-full border rounded-xl ${className}`
  

  return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
