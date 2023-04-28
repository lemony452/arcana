import { create } from 'zustand';

// 타입지정
interface CardIdxState {
  cardIdx: number;
  setCardIdx: (idx: number) => void;
}

// create 함수로 store 정의
export const useCardStore = create<CardIdxState>((set) => ({
  cardIdx: 0,
  setCardIdx: (idx) => {
    set(() => ({ cardIdx: idx }));
  },
}));
