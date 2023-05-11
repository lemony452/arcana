import { create } from 'zustand';

interface InfoState {
  user: any;
  nickname: string;
  tarotToken: number;
  isLogin: boolean;
  setUser: (user: any) => void;
  setNickname: (name: string) => void;
  setTarotToken: (t: number) => void;
  setIsLogin: (login: boolean) => void;
}

export const userInfoStore = create<InfoState>((set) => ({
  user: {},
  nickname: '',
  tarotToken: 0,
  isLogin: false,
  setUser: (u) => {
    set(() => ({ user: u }));
  },
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
