import React from "react";

export const ChatCard = () => {
  return (
    <div className="bg-white h-fit w-11/12 flex flex-row gap-1 my-2 items-center">
      <div className="h-10 w-10 rounded-full  bg-slate-400 shadow-md">
        <p className="text-4xl text-white">J</p>
      </div>
      <div className="bg-indigo-700 w-56 md:w-4/12 text-white rounded-lg h-fit shadow-md">
        <p className="text-left mx-2 text-sm">
          Cupcake ipsum dolor sit amet I love. Cake chocolate cake sugar plum
          apple pie I love.
        </p>
      </div>
    </div>
  );
};
