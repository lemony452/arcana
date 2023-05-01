import { create } from 'zustand';

// 타입지정
interface CardIdxState {
  cardIdx: number;
  setCardIdx: (idx: number) => void;
}

interface HoverState {
  hover: boolean;
  setHover: (hover: boolean) => void;
}

// create 함수로 store 정의
export const useCardStore = create<CardIdxState>((set) => ({
  cardIdx: 0,
  setCardIdx: (idx) => {
    set(() => ({ cardIdx: idx }));
  },
}));

export const useHoverStore = create<HoverState>((set) => ({
  hover: false,
  setHover: (hover) => {
    set(() => ({ hover: !hover }));
  },
}));
