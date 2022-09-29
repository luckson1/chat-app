import React from "react";
import { ChatCard } from "./ChatCard";

export const MessageBody = () => {
  return (
    <>
      <p className="my-2 text-2xl">Chat Room</p>
      <div className="my-5  bg-white w-full md:w-11/12 h-4/6 rounded-l m-auto flex flex-col items-center justify-between mb-0 overflow-scroll">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
    </>
  );
};
