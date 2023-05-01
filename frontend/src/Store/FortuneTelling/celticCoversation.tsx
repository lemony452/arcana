import React from 'react';
import { create } from 'zustand';

interface ConversationState {
  conversation: string;
  setConversation: (conversation: string) => void;
}

export const useConversationStore = create<ConversationState>((set) => ({
  conversation: '',
  setConversation: (c) => {
    set(() => ({ conversation: c }));
  },
}));
