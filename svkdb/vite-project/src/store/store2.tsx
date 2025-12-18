// src/store/simpleStore.ts
import { create } from 'zustand';

interface ChatType {
  id: string;
  name: string;
  avatar: string;
  lastMessage?: string;
}

interface MessageType {
  id: string;
  chatId: string;
  text: string;
  senderId: string;
}

interface ChatStore {
  chats: ChatType[];
  messages: MessageType[];
  currentChatId: string | null;
  setCurrentChat: (chatId: string) => void;
  addMessage: (message: MessageType) => void;
  getCurrentChat: () => ChatType | null;
  getChatMessages: (chatId: string) => MessageType[];
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: [
    { id: '1', name: 'Алексей', avatar: '🙄', lastMessage: 'Привет! Как дела?' },
    { id: '2', name: 'Мария', avatar: '😎', lastMessage: 'Встречаемся завтра' },
    { id: '3', name: 'Команда проекта', avatar: '👥', lastMessage: 'Новые задачи готовы' },
  ],
  
  messages: [
    { id: '1', chatId: '1', text: 'Привет! Как дела?', senderId: 'alexey' },
    { id: '2', chatId: '1', text: 'Всё отлично, спасибо!', senderId: 'user' },
    { id: '3', chatId: '2', text: 'Встречаемся завтра', senderId: 'maria' },
  ],
  
  currentChatId: null,
  
  setCurrentChat: (chatId: string) => {
    set({ currentChatId: chatId });
  },
  
  addMessage: (message: MessageType) => {
    set((state) => ({
      messages: [...state.messages, message],
      chats: state.chats.map(chat => 
        chat.id === message.chatId 
          ? { ...chat, lastMessage: message.text }
          : chat
      )
    }));
  },
  
  getCurrentChat: () => {
    const state = get();
    if (!state.currentChatId) return null;
    return state.chats.find(chat => chat.id === state.currentChatId) || null;
  },
  
  getChatMessages: (chatId: string) => {
    const state = get();
    return state.messages.filter(msg => msg.chatId === chatId);
  }
}));