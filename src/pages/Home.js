import React from "react";
import { JoinChatForm, Nav } from "../components";

function Home() {
  return (
    <>
      <Nav />
      <div className="bg-gradient-to-b from-sky-100 via-fuchsia-100 to-cyan-100 w-screen h-screen mt-12">
        <JoinChatForm />
      </div>
    </>
  );
}

export default Home;
