import React from "react";

export const ChatCard = ({ message }) => {
  //get id of the user loggedin in in current tab/window
  const userDatFromStorage = sessionStorage.getItem("userData")
    ? JSON.parse(sessionStorage.getItem("userData"))
    : undefined;

  const { userId } = userDatFromStorage;
  const isCurrentUser = message?.creator?.includes(userId);
  const parentClassName = isCurrentUser
    ? "bg-white h-fit w-11/12 flex flex-row-reverse gap-1 mt-2 items-center"
    : "bg-white h-fit w-11/12 flex flex-row gap-1 mt-2 items-center";
  const childClassName = isCurrentUser
    ? "bg-slate-400 w-56 md:w-4/12 text-white rounded-lg h-fit shadow-md"
    : "bg-indigo-700 w-56 md:w-4/12 text-white rounded-lg h-fit shadow-md";
  return (
    <div className={parentClassName}>
      <div className="h-10 w-10 rounded-full  bg-slate-400 shadow-md">
        <p className="text-4xl text-white">{message?.alias.slice(0, 1)}</p>
      </div>
      <div className={childClassName}>
        <p className="text-left mx-2  text-green-400 text-xs">
          {message?.alias}
        </p>
        <p className="text-left mx-2 text-sm">{message?.body}</p>
      </div>
    </div>
  );
};
