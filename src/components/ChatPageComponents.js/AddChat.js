import React from "react";
import { AddChatForm } from "./AddChatForm";

export const AddChat = () => {
  return (
    <div className=" bg-sky-100 shadow-2xl h-28 w-11/12 flex flex-col  pt-7 items-center gap-3 m-auto mt-5 rounded-lg">
      <AddChatForm />
    </div>
  );
};
