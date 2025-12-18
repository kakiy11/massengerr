
import React from "react";
import { useChatStore } from "../store/store2";
import "./chatlist.css";

const ChatList: React.FC = () => {
	const { chats, currentChatId, setCurrentChat } = useChatStore();

	const handleChatClick = (chatId: string) => {
		setCurrentChat(chatId);
	};

	return (
		<div className="chat-list">
			{chats.map((chat) => {
				const isActive = chat.id === currentChatId;

				return (
					<div
						key={chat.id}
						className={`chat-item ${isActive ? "active" : ""}`}
						onClick={() => handleChatClick(chat.id)}
					>
						<div className="chat-avatar">{chat.avatar}</div>
						<div className="chat-content">
							<div className="chat-header-row">
								<h3 className="chat-name">{chat.name}</h3>
								<span className="chat-time">12:30</span>
							</div>
							<div className="chat-message-row">
								<p className="chat-last-message">
									{chat.lastMessage}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ChatList;
