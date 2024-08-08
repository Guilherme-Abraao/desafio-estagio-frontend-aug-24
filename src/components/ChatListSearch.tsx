import lupa from '../assets/magnifying-glass-solid.svg';

const ChatListSearch = () => {
    return (
        <div className="flex items-center w-96 p-3 border-b bg-[#111B21] hover:bg-[#202C33] cursor-pointer">
            

            <input 
                type="text" 
                placeholder='Pesquisar'
                
                />

            <img
                src={lupa}
            />

        </div>
    );
};

export default ChatListSearch;
