import { create } from 'zustand';

interface InfoState {
  nickname: string;
  token: number;
  setNickname: (name: string) => void;
  setTocken: (t: number) => void;
}

export const useInfoStore = create<InfoState>((set) => ({
  nickname: '',
  token: 0,
  setNickname: (name) => {
    set(() => ({ nickname: name }));
  },
  setTocken: (t) => {
    set(() => ({ token: t }));
  },
}));
