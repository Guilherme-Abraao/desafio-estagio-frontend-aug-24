import React, { useEffect, useState } from 'react';
import ChatListItem from './ChatListItem';
import ChatListItemInterface from '../components/interfaces/ChatListItemInterface' 

const ChatList = () => {
    const [chatData, setChatData] = useState<ChatListItemInterface[]>([]);

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

    return (
        <div>
            {chatData.map(chat => (
                <ChatListItem key={chat.id} data={chat} />
            ))}
        </div>
    );
};

export default ChatList;
