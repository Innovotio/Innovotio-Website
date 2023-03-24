import React from 'react';

const Button = ({ text, className, onClick }) => {
  //const btnClass = `  ${className}`
  

  return (
    <button  classNmae={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
