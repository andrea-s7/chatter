import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//managing and providing shared state throughout a component tree
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    // Retrieve user info from localStorage
    const userInfoString = localStorage.getItem("userInfo");

    if (userInfoString) {
      try {
        const userInfo = JSON.parse(userInfoString);
        setUser(userInfo);
      } catch (error) {
        console.error("Failed to parse user info from localStorage:", error);
        localStorage.removeItem("userInfo"); // Clean up any corrupted data
        setUser(null);
      }
    } else {
      navigate("/"); // Redirect to home if no user info found
    }
  }, [navigate]);

  return (
    <ChatContext.Provider
  
    >
      {children}
    </ChatContext.Provider>
  );
};

//useContext Hook
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
