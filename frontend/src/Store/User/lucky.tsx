import { create } from 'zustand';

interface LuckyType {
  card: {
    idx: number;
    name: string;
  };
  ment: string;
}

interface LuckyState {
  // luckyNum: number;
  // luckyName: string;
  lucky: LuckyType;
  luckyMent: string;
  // setLuckyNum: (luckyNum: number) => void;
  // setLuckyName: (luckyName: string) => void;
  setLucky: (lucky: LuckyType) => void;
  setLuckyMent: (luckyMent: string) => void;
}

export const useLuckyStore = create<LuckyState>((set) => ({
  // luckyNum: 0,
  // luckyName: '',
  lucky: {
    card: {
      idx: 0,
      name: '',
    },
    ment: '',
  },
  luckyMent: '',
  // setLuckyNum: (idx) => {
  //   set(() => ({ luckyNum: idx }));
  // },
  // setLuckyName: (card) => {
  //   set(() => ({ luckyName: card }));
  // },
  setLucky: (l) => {
    set(() => ({ lucky: l }));
  },
  setLuckyMent: (ment) => {
    set(() => ({ luckyMent: ment }));
  },
}));
