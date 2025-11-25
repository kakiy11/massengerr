import { createContext } from "react";
import { create } from "zustand";

export type MessageType = {
	id: string;
	chatId: string;
	text: string;
	senderId: string;
};
type ChatType = {
	id: string
	username: string
	avatar: string
}
interface MessagesStore {
	messages: MessageType[];
	addMessage: (newMessage: MessageType) => void;
	updateMessage: (messageId: string, text: string) => void;
}
interface AppContextType{
	chats: ChatType[]
}
const AppContext = createContext<AppContextType>
export const useMessage = create<MessagesStore>((set) => ({
	messages: [],
	addMessage: (newMessage: MessageType) => {
		set((state) => ({
			messages: [...state.messages, newMessage],
		}));
	},
	updateMessage: (messageId: string, text: string) => {
		set((state) => ({
			messages: state.messages.map((message) =>
				message.id === messageId ? { ...message, text } : message
			),
		}));
	},
}));
function App(){
	return (
		<AppContext.Provider>

		</AppContext.Provider>
	)
}
