import React from 'react';
import ballon from '../assets/balloon.png';
import people from '../assets/people.png'; 

const ChatListFilter = () => {
    return (
        <div className="absolute right-0 mt-2 w-60 bg-[#202C33] rounded-md shadow-lg border border-[#2A3B44]">
            <div className="p-4 text-gray-300 font-semibold">Conversas</div>
            <ul>
                <li className="flex items-center p-4 pl-6 text-gray-300 hover:bg-[#2A3B44] cursor-pointer">
                    <img src={ballon} alt="Ballon" className="w-5 h-5 mr-2" />
                    Conversas não lidas
                </li>
                <li className="flex items-center p-4 pl-6 text-gray-300 hover:bg-[#2A3B44] cursor-pointer">
                    <img src={people} alt="People" className="w-5 h-5 mr-2" />
                    Grupos
                </li>
            </ul>
        </div>
    );
};

export default ChatListFilter;
