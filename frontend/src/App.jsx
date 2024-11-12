import './App.css';
import { Routes, Route } from "react-router-dom"; // Import Routes as well
import Homepage from './Pages/Homepage.jsx';
import ChatPage from './Pages/ChatPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/chats" element={<ChatPage />} /> 
      </Routes>
    </div>
  );
}

export default App;

