
import React from 'react';
import ballon from '../assets/balloon.png';
import people from '../assets/people.png';
import { useChatStore } from '../store/useChatStore';
import { useLocation, useNavigate } from 'react-router-dom';

type FilterType = 'unread' | 'group' | '';

const ChatListFilter: React.FC = () => {
  const { filter, setFilter } = useChatStore(state => ({
    filter: state.filter,
    setFilter: state.setFilter
  }));
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterChange = (filterType: FilterType) => {
    setFilter(filterType);
    const params = new URLSearchParams(location.search);
    params.set('filter', filterType);
    navigate({ search: params.toString() }, { replace: true });
  };

  return (
    <div className="absolute right-0 mt-2 w-60 bg-[#202C33] rounded-md shadow-lg border border-[#2A3B44]">
      <div className="p-4 text-gray-300 font-semibold">Conversas</div>
      <ul>
        <li
          onClick={() => handleFilterChange('unread')}
          className={`flex items-center p-4 pl-6 text-gray-300 hover:bg-[#2A3B44] cursor-pointer ${filter === 'unread' ? 'bg-[#2A3B44]' : ''}`}
        >
          <img src={ballon} alt="Ballon" className="w-5 h-5 mr-2" />
          Conversas não lidas
        </li>
        <li
          onClick={() => handleFilterChange('group')}
          className={`flex items-center p-4 pl-6 text-gray-300 hover:bg-[#2A3B44] cursor-pointer ${filter === 'group' ? 'bg-[#2A3B44]' : ''}`}
        >
          <img src={people} alt="People" className="w-5 h-5 mr-2" />
          Grupos
        </li>
        <li
          onClick={() => handleFilterChange('')}
          className={`flex items-center p-4 pl-6 text-gray-300 hover:bg-[#2A3B44] cursor-pointer ${filter === '' ? 'bg-[#2A3B44]' : ''}`}
        >
          <img src={ballon} alt="All" className="w-5 h-5 mr-2" />
          Todos
        </li>
      </ul>
    </div>
  );
};

export default ChatListFilter;
