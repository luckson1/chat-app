import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { ChatRoom } from "./pages/ChatRoom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/chat-room" element={<ChatRoom />} />

      </Routes>
    </BrowserRouter>
  );
}
