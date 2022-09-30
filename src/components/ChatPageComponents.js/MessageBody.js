import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../utils/Database";
import { ChatCard } from "./ChatCard";

export const MessageBody = () => {
  //use useLiveQuery for real time data fetching
  

  let messages =  useLiveQuery(() => db.messages?.toArray(), []);

  return (
    <>
      <p className="my-1 text-2xl">Chat Room</p>
      <div className="my-5  bg-white w-full md:w-11/12 h-4/6 rounded-l m-auto flex flex-col items-center gap-1 mb-0 overflow-scroll">
  
       { messages?.length ? messages?.map(message=> <ChatCard message={message} key={message?.id}/>): "No Messages to display"}
       
      </div>
    </>
  );
};
