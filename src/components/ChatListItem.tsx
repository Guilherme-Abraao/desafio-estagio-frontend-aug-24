// components/ChatListItem.tsx
import React from 'react';
import checkmarkOutline from '../assets/checkmark-outline.png';
import checkmarkDoneOutline from '../assets/checkmark-done-outline.png';
import ChatListItemInterface from './interfaces/ChatListItemInterface';

const ChatListItem: React.FC<{ data: ChatListItemInterface }> = ({ data }) => {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const checkmarkImage = data.unread ? checkmarkOutline : checkmarkDoneOutline;

  return (
    <div className="flex items-center w-96 p-3 border-b border-[#202C33] bg-[#111B21] hover:bg-[#202C33] cursor-pointer">
      <img
        src={data.image} // Verifique se esta URL é válida
        alt={data.name}
        className="w-12 h-12 rounded-full"
      />

      <div className="ml-4 flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <div className="text-[#E9EDEF] text-base">{data.name}</div>
          <div className="text-[#8696A0] text-xs flex items-center">
            {formatDate(data.hour)}
          </div>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={checkmarkImage}
            alt="Checkmark"
            className="w-4 h-4 mr-2"
          />
          <div className="text-[#8696A0] text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-[18rem]">
            {data.conversation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
