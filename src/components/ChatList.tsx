import React from 'react';
import { ChatListItemData } from '@/dataset/ChatListItemData';
import ChatListItem from './ChatListItem';

const ChatList = () => {
    return (
        <div>
            {ChatListItemData.map((chat, index) => (
                <ChatListItem key={index} data={chat} />
            ))}
        </div>
    );
};

export default ChatList;