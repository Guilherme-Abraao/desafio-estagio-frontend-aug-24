import React from 'react';
import { ChatListItemData } from '@/dataset/ChatListItemData';

interface ChatListItemProps {
    data: ChatListItemData;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ data: chatItemData }) => {
    return (
        <div className="flex items-center w-96 p-3 border-b bg-[#111B21] hover:bg-[#202C33] cursor-pointer">
            <img
                src={chatItemData.image}
                alt={chatItemData.name}
                className="w-12 h-12 rounded-full"
            />

            <div className="ml-4 flex flex-col justify-between w-full">
                <div className="flex justify-between">
                    <div className="text-[#E9EDEF] text-base">{chatItemData.name}</div>
                    <div className="text-[#8696A0] text-xs flex items-center">{chatItemData.hour}</div>
                </div>
                <div className="flex items-center mt-2">
                    <img
                        src={chatItemData.image}
                        alt="Icon"
                        className="h-3 mr-2"
                    />
                    <div className="text-[#8696A0] text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-72">
                        {chatItemData.conversation}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatListItem;
