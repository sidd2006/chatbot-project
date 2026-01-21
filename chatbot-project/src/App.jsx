import { useState,useRef,useEffect } from 'react'
import {ChatInput} from './components/ChatInput.jsx'
import './App.css'
import user from './assets/user.png';
import robot from './assets/robot.png';


      function ChatMessage({ message, sender }) {
        // const message = props.message;        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div> 
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div className={
            sender === 'user'
              ? 'chat-message-user'
              : 'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={robot}  className="chat-message-profile" /> 
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={user}  className="chat-message-profile" />
            )}
          </div>
        );
      }

      function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useRef(null);

        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);

        return (
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }


function App() {
        const [chatMessages, setChatMessages] = useState([]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
