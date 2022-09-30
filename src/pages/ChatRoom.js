import React from "react";
import { AddChat, MessageBody, Nav } from "../components";

export const ChatRoom = () => {
  return (
    <>
      <Nav />
      <div className="bg-slate-50 w-screen h-screen mt-8 pl-0 pr-3 md:px-8 py-8 flex flex-col">
        <MessageBody />
        <AddChat />
      </div>
    </>
  );
};
