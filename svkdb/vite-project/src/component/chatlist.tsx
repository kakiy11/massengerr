
import React from 'react';
import './chatlist.css';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
  time: string;
}

const ChatList: React.FC = () => {
  const chats: Chat[] = [
    { 
      id: 1, 
      name: 'Алексей', 
      lastMessage: 'Привет! Как дела?', 
      avatar: '🙄',
      time: '12:30',

    },
    { 
      id: 2, 
      name: 'Мария', 
      lastMessage: 'Встречаемся завтра', 
      avatar: '😎',
      time: '11:15'
    },
    { 
      id: 3, 
      name: 'Команда проекта', 
      lastMessage: 'Новые задачи готовы', 
      avatar: '👥',
      time: '10:45',
    },
  ];
 
  return (
    <div className="chat-list">
      {chats.map(chat => (
        <div key={chat.id} className="chat-item">
          <div className="chat-avatar">
            {chat.avatar}
          </div>
          <div className="chat-content">
            <div className="chat-header-row">
              <h3 className="chat-name">{chat.name}</h3>
              <span className="chat-time">{chat.time}</span>
            </div>
            <div className="chat-message-row">
              <p className="chat-last-message">{chat.lastMessage}</p>
            </div>
          </div>
          
        </div>
        
      ))}
    </div>
  
  );

};

export default ChatList;