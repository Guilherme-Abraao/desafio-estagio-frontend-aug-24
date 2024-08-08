import perfil2 from '../assets/person2.png'

export interface ChatListItemData {
    id: number; 
    image: string;
    name: string;
    hour: string;
    conversation: string;
    unread: boolean;
    group: boolean;
}

export const ChatListItemData = [
    {
        id: 1,
        image: perfil2,
        name: 'Guilherme',
        hour: '08:40',
        conversation: 'Bom dia! Preciso que você verifique sua caixa de e-mail e me responda antes da nossa reunião',
        unread: false,
        group: false,
    }, 

]