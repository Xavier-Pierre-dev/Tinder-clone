import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Jeff Bezos",
      image: "https://www.itespresso.fr/wp-content/uploads/2011/10/apple-steve-jobs-big1-1280x720.jpg",
      message: "Whats up !",
    },
    {
      name: "Jeff Bezos",
      image: "https://www.itespresso.fr/wp-content/uploads/2011/10/apple-steve-jobs-big1-1280x720.jpg",
      message: "Whats up :D !",
    },
    {
      name: "",
      image: "...",
      message: "Whats up !",
    },
  ]);
  const [input, setInput] = useState("");
  

  const handleSend = e => {
      e.preventDefault();
      if(input!==""){
        setMessages([...messages, {message: input}]);
      setInput("");
      }

  };

  
  useEffect(()=>{
    console.log(document.getElementsByClassName('chatScreen')[0].scrollHeight)
    document.getElementsByClassName('chatScreen')[0].scrollIntoView(0, document.getElementsByClassName('chatScreen')[0].scrollHeight);
  }, [messages])

  return (
      <>
    <div className="chatScreen">
      <p>You matched with Jeff Bezos on 30/04/2021</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
        <form className="chatScreen__input">
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message..." type="text" className="chatScreen__inputField"></input>
            <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
    </>


    
  );
}

export default ChatScreen;
