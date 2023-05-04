import { create } from 'zustand';

interface LuckyState {
  luckyIdx: number;
  luckyMent: string;
  setLuckyIdx: (luckyIdx: number) => void;
  setLuckyMent: (luckyMent: string) => void;
}

export const useLuckyStore = create<LuckyState>((set) => ({
  luckyIdx: 0,
  luckyMent: '',
  setLuckyIdx: (idx) => {
    set(() => ({ luckyIdx: idx }));
  },
  setLuckyMent: (ment) => {
    set(() => ({ luckyMent: ment }));
  },
}));
