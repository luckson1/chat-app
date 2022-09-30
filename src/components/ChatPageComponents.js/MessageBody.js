import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../utils/Database";
import { ChatCard } from "./ChatCard";
import { Button } from "../index";

export const MessageBody = () => {
  //handle scrolling

  const [limit, setLimit] = useState(5);
  //use useLiveQuery for real time data fetching

  let messages = useLiveQuery(
    () => db.messages?.orderBy("id")?.reverse()?.limit(limit)?.toArray(),
    [limit]
  );

  return (
    <>
      <p className="my-1 text-2xl">Chat Room</p>
      <div className="my-5  bg-white w-full md:w-11/12 h-4/6 rounded-l m-auto flex flex-col items-center gap-1 mb-0 overflow-scroll">
        {messages?.length
          ? messages?.map((message) => (
              <ChatCard message={message} key={message?.id} />
            ))
          : "No Messages to display"}
        <div className="mt-5">
        
          <Button
            bgColor="bg-green-500"
            text="Load more"
            onClick={() => setLimit((limit) => limit + 5)}
          />
        </div>
      </div>
    </>
  );
};
