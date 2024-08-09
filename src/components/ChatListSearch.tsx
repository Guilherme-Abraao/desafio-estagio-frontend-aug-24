import React, { useEffect, useState } from 'react';
import lupa from '../assets/magnifying-glass-solid.svg';
import filterImage from '../assets/filter.png';
import ChatListItem from './ChatListItem';
import ChatListFilter from './ChatListFilter';
import { useChatStore } from '../store/useChatStore';
import { useLocation, useNavigate } from 'react-router-dom';

const ChatListSearch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const { setSearchTerm, setChats, chats, filter, setFilter } = useChatStore(state => ({
    setSearchTerm: state.setSearchTerm,
    setChats: state.setChats,
    chats: state.chats,
    filter: state.filter,
    setFilter: state.setFilter
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

  useEffect(() => {
    // Inicializa o estado com o valor da URL
    const params = new URLSearchParams(location.search);
    const urlSearchTerm = params.get('searchTerm') || '';
    const urlFilter = params.get('filter') || '';

    setLocalSearchTerm(urlSearchTerm);
    setSearchTerm(urlSearchTerm);
    setFilter(urlFilter as 'unread' | 'group' | '');
  }, [location.search, setSearchTerm, setFilter]);

  const filteredChats = chats.filter(chat => {
    const matchesSearchTerm = chat.name.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
      chat.conversation.toLowerCase().includes(localSearchTerm.toLowerCase());

    if (filter === 'unread') {
      return matchesSearchTerm && chat.unread;
    }
    if (filter === 'group') {
      return matchesSearchTerm && chat.group;
    }
    return matchesSearchTerm;
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      const params = new URLSearchParams(location.search);
      params.set('searchTerm', event.target.value);
      if (filter) {
        params.set('filter', filter);
      }
      navigate(`?${params.toString()}`, { replace: true });
    }, 100);

    setDebounceTimeout(newTimeout);
  };

  const handleFilterClose = () => {
    setShowFilter(false);
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
            value={localSearchTerm}
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
          {showFilter && <ChatListFilter onClose={handleFilterClose} />}
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
