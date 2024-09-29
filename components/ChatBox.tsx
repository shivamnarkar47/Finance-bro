//@ts-nocheck
"use client"
import React, { useState } from "react";
import { Button, Input, Card, Text, Container, Spacer, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // Function to send a message
  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Update message list with the new message from the user
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: inputMessage }]);

    // Clear the input field
    setInputMessage("");

    // Simulate receiving a response from "chatbot"
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Hello! How can I help you?" }]);
    }, 1000); // Simulate a delay of 1 second for bot response
  };

  return (
    <div>
      <Card css={{ mw: "400px", p: "20px" }}>
        <CardHeader>
          <p>Chatbox</p>
        </CardHeader>

        <CardBody css={{ overflowY: "auto", maxHeight: "300px" }}>
          {messages.map((message, index) => (
            <p key={index} style={{ textAlign: message.sender === "user" ? "right" : "left" }}>
              <b>{message.sender === "user" ? "You" : "Bot"}: </b>
              {message.text}
            </p>
          ))}
        </CardBody>

        <CardFooter>
          <Input
            clearable
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Spacer x={0.5} />
          <Button  onClick={sendMessage}>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Chatbox;

