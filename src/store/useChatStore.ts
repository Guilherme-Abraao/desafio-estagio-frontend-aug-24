// store/useChatStore.ts
import { create } from 'zustand';

interface Chat {
  id: number;
  name: string;
  conversation: string;
  unread: boolean;
  group: boolean; // Altere para isGroup
  image: string;
  hour: string;
}

interface ChatStore {
  searchTerm: string;
  filter: 'unread' | 'group' | '';
  chats: Chat[];
  setSearchTerm: (term: string) => void;
  setFilter: (filter: 'unread' | 'group' | '') => void;
  setChats: (chats: Chat[]) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  searchTerm: '',
  filter: '',
  chats: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilter: (filter) => set({ filter }),
  setChats: (chats) => set({ chats }),
}));
