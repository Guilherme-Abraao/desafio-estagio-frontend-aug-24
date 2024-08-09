import React from 'react';
import { useChatStore } from '../store/useChatStore';

const ChatList: React.FC = () => {
    const { searchTerm, filter, chats } = useChatStore((state) => ({
        searchTerm: state.searchTerm,
        filter: state.filter,
        chats: state.chats,
    }));

    const filteredChats = chats.filter((chat) => {

        const matchesSearchTerm = chat.name.toLowerCase().includes(searchTerm.toLowerCase()) 

        if (filter === 'unread') {
            return matchesSearchTerm && chat.unread;
        }
        if (filter === 'group') {
            return matchesSearchTerm && chat.group;
        }
        return matchesSearchTerm;
    });

    return (
        <div className="min-h-screen w-full flex flex-col">
            {filteredChats.length === 0 ? (
                <div className="p-4 text-gray-400">Nenhuma conversa encontrada.</div>
            ) : (
                filteredChats.map((chat) => (
                    <div key={chat.id} className="p-4 border-b border-gray-600">
                        <h3 className="text-white">{chat.name}</h3>
                        <p className="text-gray-400">{chat.conversation}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ChatList;
