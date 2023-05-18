import { create } from 'zustand';

// 타입지정
interface CardOrderState {
  cardOrder: string;
  setCardOrder: (s: string) => void;
}

interface HoverState {
  hover: boolean;
  setHover: (hover: boolean) => void;
}

// create 함수로 store 정의
export const useCardStore = create<CardOrderState>((set) => ({
  cardOrder: 'celtic',
  setCardOrder: (c) => {
    set(() => ({ cardOrder: c }));
  },
}));

export const useHoverStore = create<HoverState>((set) => ({
  hover: false,
  setHover: (h) => {
    set(() => ({ hover: h }));
  },
}));
