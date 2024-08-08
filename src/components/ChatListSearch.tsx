import React, { useState, useMemo } from 'react';
import lupa from '../assets/magnifying-glass-solid.svg';
import filter from '../assets/filter.png';
import { ChatListItemData } from '@/dataset/ChatListItemData';
import ChatListItem from './ChatListItem';

const ChatListSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredChats = useMemo(() => {
        return ChatListItemData.filter(chat =>
            chat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

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
                        placeholder='Pesquisar'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-3 py-2 bg-transparent text-[#E9EDEF] placeholder-[#8696A0] focus:outline-none rounded-lg"
                    />
                </div>

                <div className="ml-auto pr-3">
                    <img
                        src={filter}
                        alt="Filtro"
                        className="h-4 w-4 text-[#8696A0]"
                    />
                </div>
            </div>

            <div className="bg-[#111B21]">
                {filteredChats.map((chat, index) => (
                    <ChatListItem key={index} data={chat} />
                ))}
            </div>
        </div>
    );
};

export default ChatListSearch;
