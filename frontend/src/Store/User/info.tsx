import { create } from 'zustand';

interface InfoState {
  nickname: string;
  token: number;
  isLogin: boolean;
  setNickname: (name: string) => void;
  setTocken: (t: number) => void;
  setIsLogin: (login: boolean) => void;
}

export const useInfoStore = create<InfoState>((set) => ({
  nickname: '',
  token: 0,
  isLogin: false,
  setNickname: (name) => {
    set(() => ({ nickname: name }));
  },
  setTocken: (t) => {
    set(() => ({ token: t }));
  },
  setIsLogin: (login) => {
    set(() => ({ isLogin: login }));
  },
}));
