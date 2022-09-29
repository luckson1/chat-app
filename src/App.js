import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChatRoom } from "./pages/ChatRoom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/chat-room" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}
