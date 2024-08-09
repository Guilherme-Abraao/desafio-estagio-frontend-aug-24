import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChatListItem from '../components/ChatListItem'; // Caminho correto para o seu componente
import ChatListItemInterface from '../components/interfaces/ChatListItemInterface';
import perfil from '../assets/person1.png';

// Defina metadados para o componente
export default {
  title: 'Components/ChatListItem',
  component: ChatListItem,
} as Meta<typeof ChatListItem>;

// Template para criar diferentes variações do componente
const Template: StoryFn<{ data: ChatListItemInterface }> = (args) => <ChatListItem {...args} />;

// Grupo em que a mensagem não foi lida
export const UnreadGroup = Template.bind({});
UnreadGroup.args = {
  data: {
    id: 3,
    name: 'Trabalho da faculdade',
    hour: '2092-10-11T16:01:26.191Z',
    conversation: 'Alguém começou o projeto?',
    unread: true,
    image: 'https://loremflickr.com/640/480/sports',
    group: true,
  }
};

// Grupo em que a mensagem foi lida
export const ReadGroup = Template.bind({});
ReadGroup.args = {
  data: {
    id: 4,
    name: 'Família',
    hour: '2021-04-09T07:45:58.748Z',
    conversation: 'Domingo a gente vai almoçar na tia Elza, não se esqueçam',
    unread: false,
    image: 'https://loremflickr.com/640/480/cats',
    group: true,
  }
};

// Conversa individual em que a mensagem foi lida
export const ReadConversation = Template.bind({});
ReadConversation.args = {
  data: {
    id: 1,
    name: 'Otto',
    hour: '2039-06-15T04:21:34.086Z',
    conversation: 'Bom dia Tudo bem?',
    unread: false,
    image: 'https://loremflickr.com/640/480/sports',
    group: false,
  }
};

// Conversa individual em que a mensagem não foi lida
export const UnreadConversation = Template.bind({});
UnreadConversation.args = {
  data: {
    id: 2,
    name: 'Reyna',
    hour: '2096-09-10T20:30:10.964Z',
    conversation: 'Você vai no aniversário dela amanhã?',
    unread: true,
    image: 'https://loremflickr.com/640/480/animals',
    group: false,
  }
};
