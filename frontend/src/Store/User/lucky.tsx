import { create } from 'zustand';

interface LuckyState {
  lucky: object;
  luckyMent: string;
  setLucky: (lucky: object) => void;
  setLuckyMent: (luckyMent: string) => void;
}

export const useLuckyStore = create<LuckyState>((set) => ({
  lucky: {},
  luckyMent: '',
  setLucky: (l) => {
    set(() => ({ lucky: l }));
  },
  setLuckyMent: (ment) => {
    set(() => ({ luckyMent: ment }));
  },
}));
