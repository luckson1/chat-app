import React from "react";
export const Button = ({
  bgColor,
  size,
  text,
  onClick,
  type
}) => {
  return (
    <>
      <button
        type={type}
    
        className={` text-${size} py-2 px-8 shadow-lg hover:drop-shadow-xl opacity-0.5 bg-opacity-20 transition ease-in-out delay-150 ${bgColor} rounded-full`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
