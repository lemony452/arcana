import { create } from 'zustand';

interface LuckyState {
  luckyNum: number;
  luckyName: string;
  luckyMent: string;
  setLuckyNum: (luckyNum: number) => void;
  setLuckyName: (luckyName: string) => void;
  setLuckyMent: (luckyMent: string) => void;
}

export const useLuckyStore = create<LuckyState>((set) => ({
  luckyNum: 0,
  luckyName: '',
  luckyMent: '',
  setLuckyNum: (idx) => {
    set(() => ({ luckyNum: idx }));
  },
  setLuckyName: (card) => {
    set(() => ({ luckyName: card }));
  },
  setLuckyMent: (ment) => {
    set(() => ({ luckyMent: ment }));
  },
}));
