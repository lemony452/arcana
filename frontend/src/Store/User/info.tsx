import { create } from 'zustand';

interface UserState {
  uid: string;
  email: string;
  providerId: string;
}

interface InfoState {
  user: UserState;
  nickname: string;
  tarotToken: number;
  isLogin: boolean;
  isSide: boolean;
  goLogin: boolean;
  ticket: number;
  weekly_count: number;
  token: number;
  setUser: (user: any) => void;
  setNickname: (name: string) => void;
  setTarotToken: (t: number) => void;
  setIsLogin: (login: boolean) => void;
  setIsSide: (side: boolean) => void;
  setGoLogin: (go: boolean) => void;
  setTicket: (t: number) => void;
  setWeekly: (w: number) => void;
  setToken: (t: number) => void;
}

export const userInfoStore = create<InfoState>((set) => ({
  user: {
    uid: '',
    email: '',
    providerId: '',
  },
  nickname: '',
  tarotToken: 0,
  isLogin: false,
  isSide: false,
  goLogin: false,
  ticket: 0,
  weekly_count: 0,
  token: 0,
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
  setIsSide: (side) => {
    set(() => ({ isSide: side }));
  },
  setGoLogin: (go) => {
    set(() => ({ goLogin: go }));
  },
  setTicket: (t) => {
    set(() => ({ ticket: t }));
  },
  setWeekly: (w) => {
    set(() => ({ weekly_count: w }));
  },
  setToken: (t) => {
    set(() => ({ token: t }));
  },
}));
