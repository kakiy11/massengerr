
import React, { useState } from "react";
import { useChatStore } from "../store/store2";
import styles from "../pages/Page2.module.css";
import "./rightchat.css";

const RightBlock: React.FC = () => {
  const { currentChatId, getCurrentChat, addMessage, getChatMessages } = useChatStore();
  const [message, setMessage] = useState<string>("");
  
  const currentChat = getCurrentChat();
  const messages = currentChatId ? getChatMessages(currentChatId) : [];

  const handleSendMessage = () => {
    if (message.trim() !== "" && currentChatId) {
      const newMessage = {
        id: Date.now().toString(),
        chatId: currentChatId,
        text: message,
        senderId: "user"
      };
      
      addMessage(newMessage);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!currentChat) {
    return (
      <div className={styles.messages}>
        <div className="user-bar">
          <div className="avatar-friend"></div>
          <div className="name-friend">Выберите чат</div>
        </div>
        <div className={styles.messengercontainer}>
          <div className={styles.masseges_wraper}>
            <p style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
              Выберите чат из списка слева, чтобы начать общение
            </p>
          </div>
        </div>
        <div className={styles.inputarea}>
          <input
            type="text"
            className={styles.messageinput}
            placeholder="Выберите чат для отправки сообщения"
            disabled
          />
          <button className={styles.sendbutton} disabled style={{ opacity: 0.5 }}>
            Send
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.messages}>
      <div className="user-bar">
        <div className="avatar-friend" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
          {currentChat.avatar}
        </div>
        <div className="name-friend">{currentChat.name}</div>
      </div>
      <div className={styles.messengercontainer}>
        <div className={styles.masseges_wraper}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.message}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.inputarea}>
        <input
          type="text"
          className={styles.messageinput}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.sendbutton} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default RightBlock;