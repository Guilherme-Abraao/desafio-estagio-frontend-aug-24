// components/ChatListSearch.tsx
import React, { useEffect, useMemo, useState } from 'react';
import lupa from '../assets/magnifying-glass-solid.svg';
import filterImage from '../assets/filter.png';
import ChatListItem from './ChatListItem';
import ChatListFilter from './ChatListFilter';
import { useChatStore } from '../store/useChatStore';

const ChatListSearch: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { searchTerm, setSearchTerm, setChats, setFilter, chats, filter } = useChatStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    setChats: state.setChats,
    setFilter: state.setFilter,
    chats: state.chats,
    filter: state.filter
  }));

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch('https://66b4fde59f9169621ea51e5a.mockapi.io/api/desafio-hyerdev/chat-list');
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
      }
    };

    fetchChatData();
  }, [setChats]);

  const filteredChats = useMemo(() => {
    return chats.filter(chat => {
      const matchesSearchTerm = chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.conversation.toLowerCase().includes(searchTerm.toLowerCase());

      if (filter === 'unread') {
        return matchesSearchTerm && chat.unread;
      }
      if (filter === 'group') {
        return matchesSearchTerm && chat.group;
      }
      return matchesSearchTerm;
    });
  }, [searchTerm, chats, filter]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-96">
      <div className="flex items-center p-2 border-b border-[#8696A026] bg-[#111B21]">
        <div className="relative flex items-center w-full mr-4 bg-[#202C33] rounded-lg">
          <img
            src={lupa}
            alt="Lupa"
            className="absolute left-3 h-4 w-4 text-[#8696A0]"
          />
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-3 py-2 bg-transparent text-[#E9EDEF] placeholder-[#8696A0] focus:outline-none rounded-lg"
          />
        </div>

        <div className="relative ml-auto pr-3">
          <img
            src={filterImage}
            alt="Filtro"
            className="h-4 w-4 text-[#8696A0] cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          />
          {showFilter && <ChatListFilter />}
        </div>
      </div>

      <div className="bg-[#111B21]">
        {filteredChats.length === 0 ? (
          <div className="p-4 text-gray-400">Nenhuma conversa encontrada.</div>
        ) : (
          filteredChats.map((chat) => (
            <ChatListItem key={chat.id} data={chat} />
          ))
        )}
      </div>
    </div>
  );
};

export default ChatListSearch;
