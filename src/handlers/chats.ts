import produce from 'immer';
import { getChatsData } from 'api';
import { Chat, Message } from 'types';
import { orderBy } from 'lodash-es';

export async function getChats(): Promise<Chat[]> {
  const chatSession = window.sessionStorage.getItem('chats');

  if (chatSession) {
    return JSON.parse(chatSession);
  }

  const chats = await getChatsData();
  window.sessionStorage.setItem('chats', JSON.stringify(chats));

  return chats;
}

export function putReadCount(roomId: string) {
  return new Promise<Chat[]>((resolve, reject) => {
    const chatSession = window.sessionStorage.getItem('chats');

    if (!chatSession) {
      reject(new Error('채팅목록 데이터가 존재하지 않습니다.'));
      return;
    }

    const chats: Chat[] = JSON.parse(chatSession);

    const updatedChats = produce(chats, draft => {
      const target = draft.find(chat => chat.roomId === roomId);

      if (target) {
        target.unReadCount = 0;
      }
    });

    window.sessionStorage.setItem('chats', JSON.stringify(updatedChats));

    resolve(updatedChats);
  });
}

export function putLastMessage(roomId: string, lastMessage: Message) {
  return new Promise<Chat[]>((resolve, reject) => {
    const chatSession = window.sessionStorage.getItem('chats');

    if (!chatSession) {
      reject(new Error('채팅목록 데이터가 존재하지 않습니다.'));
      return;
    }

    const chats: Chat[] = JSON.parse(chatSession);

    const updatedChats = produce(chats, draft => {
      const target = draft.find(chat => chat.roomId === roomId);

      if (target) {
        target.lastMessage = lastMessage;
      }
    });

    const sortedChats = orderBy(updatedChats, chat => chat.lastMessage.timeStamp, ['desc']);
    window.sessionStorage.setItem('chats', JSON.stringify(sortedChats));

    resolve(updatedChats);
  });
}
