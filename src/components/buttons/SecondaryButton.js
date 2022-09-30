import React from "react";

export const SecondaryButton = ({ bgColor, size, text, onClick, type }) => {
  return (
    <>
      <button
        type={type}
        className={` text-${size} py-1 px-5 shadow-lg hover:drop-shadow-xl opacity-0.5 bg-opacity-20 transition ease-in-out delay-150 ${bgColor} rounded-full`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
