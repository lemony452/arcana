import { create } from 'zustand';

interface InfoState {
  nickname: string;
  tarotToken: number;
  isLogin: boolean;
  setNickname: (name: string) => void;
  setTarotToken: (t: number) => void;
  setIsLogin: (login: boolean) => void;
}

export const useInfoStore = create<InfoState>((set) => ({
  nickname: '',
  tarotToken: 0,
  isLogin: false,
  setNickname: (name) => {
    set(() => ({ nickname: name }));
  },
  setTarotToken: (t) => {
    set(() => ({ tarotToken: t }));
  },
  setIsLogin: (login) => {
    set(() => ({ isLogin: login }));
  },
}));
