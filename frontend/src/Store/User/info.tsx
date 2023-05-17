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
  weeklyCount: number;
  token: number;
  tarotLog: any;
  isTarotLog: boolean;
  setUser: (user: any) => void;
  setNickname: (name: string) => void;
  setTarotToken: (t: number) => void;
  setIsLogin: (login: boolean) => void;
  setIsSide: (side: boolean) => void;
  setGoLogin: (go: boolean) => void;
  setTicket: (t: number) => void;
  setWeekly: (w: number) => void;
  setToken: (t: number) => void;
  setTarotLog: (tarot: any) => void;
  setIsTarotLog: (t: boolean) => void;
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
  weeklyCount: 0,
  token: 0,
  tarotLog: [],
  isTarotLog: false,
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
    set(() => ({ weeklyCount: w }));
  },
  setToken: (t) => {
    set(() => ({ token: t }));
  },
  setTarotLog: (tarot) => {
    set(() => ({ tarotLog: tarot }));
  },
  setIsTarotLog: (t) => {
    set(() => ({ isTarotLog: t }));
  },
}));
