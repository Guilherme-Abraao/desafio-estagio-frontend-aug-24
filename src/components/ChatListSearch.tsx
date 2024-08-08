import React, { useState, useEffect, useMemo } from 'react';
import lupa from '../assets/magnifying-glass-solid.svg';
import filter from '../assets/filter.png';
import ChatListItem from './ChatListItem';
import ChatListItemInterface from '../components/interfaces/ChatListItemInterface';
import ChatListFilter from './ChatListFilter'; // Importe o ChatListFilter

const ChatListSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [chatData, setChatData] = useState<ChatListItemInterface[]>([]);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch('https://66b4fde59f9169621ea51e5a.mockapi.io/api/desafio-hyerdev/chat-list');
                const data: ChatListItemInterface[] = await response.json();
                setChatData(data);
            } catch (error) {
                console.error('Erro ao buscar os dados da API:', error);
            }
        };

        fetchChatData();
    }, []);

    const filteredChats = useMemo(() => {
        return chatData.filter(chat =>
            chat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, chatData]);

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
                        src={filter}
                        alt="Filtro"
                        className="h-4 w-4 text-[#8696A0] cursor-pointer"
                        onClick={() => setShowFilter(!showFilter)} 
                    />
                    {showFilter && <ChatListFilter />} 
                </div>
            </div>

            <div className="bg-[#111B21]">
                {filteredChats.map((chat) => (
                    <ChatListItem key={chat.id} data={chat} />
                ))}
            </div>
        </div>
    );
};

export default ChatListSearch;
