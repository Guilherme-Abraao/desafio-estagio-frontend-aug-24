import perfil1 from '../assets/person1.png'
import perfil2 from '../assets/person1.png'
import artfusion from '../assets/art-fusion.png'

export interface ChatListItemData {
    image: string;
    name: string;
    hour: string;
    conversation: string;
    unread: boolean;
    group: boolean;
}

export const ChatListItemData = [
    {
        image: perfil1,
        name: 'Guilherme',
        hour: '08:40',
        conversation: 'Bom dia! Preciso que você verifique sua caixa de e-mail e me responda antes da nossa reunião',
        unread: false,
        group: false,
    }, 

    {
        image: perfil2,
        name: 'Abraão',
        hour: '13:30',
        conversation: 'Você vai no aniversário do Mateus hoje?',
        unread: false,
        group: false,
    }, 

    {
        image: perfil1,
        name: 'Mãe',
        hour: '13:40',
        conversation: 'Hoje você trabalha até que horas? Preciso de você para me ajudar com o computador',
        unread: false,
        group: false,
    }, 

    {
        image: artfusion,
        name: 'Lá de Casa',
        hour: '17:30',
        conversation: 'Mateus: Terminei o inglês, alguém vem me buscar',
        unread: false,
        group: true,
    }, 

    {
        image: artfusion,
        name: 'Art Fusion',
        hour: '18:00',
        conversation: 'João: Criei um endpoint para atualizar os dados de usuários, verifica se precisa de mais alguma coisa ',
        unread: false,
        group: true,
    }, 

    {
        image: perfil1,
        name: 'Vitória',
        hour: '19:30',
        conversation: 'Me envia o pix, a fatura do meu cartão fechou e preciso pagar',
        unread: false,
        group: false,
    }, 
]