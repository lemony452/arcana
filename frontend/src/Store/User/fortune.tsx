import { create } from 'zustand';

interface FortuneState {
  fortune: string;
  tarotList: any[];
  tarotNameList: string;
  option: string;
  inputValue: string;
  spread: string;
  summary: string;
  setSpread: (spread: string) => void;
  setInputValue: (v: string) => void;
  setOption: (opt: string) => void;
  setTarotList: (t: any[]) => void;
  setTarotNameList: (tarot: string) => void;
  addFortune: (ans: string) => void;
  setFortune: (fortune: string[]) => void;
  setSummary: (s: string) => void;
}

export const useFortuneStore = create<FortuneState>((set) => ({
  fortune: '',
  tarotList: [],
  tarotNameList: '',
  option: '',
  inputValue: '',
  spread: '',
  summary: '',
  setSpread: (s) => {
    set(() => ({ spread: s }));
  },
  setInputValue: (v) => {
    set(() => ({ inputValue: v }));
  },
  setOption: (opt) => {
    set(() => ({ option: opt }));
  },
  setTarotNameList: (tarotName) => {
    set(() => ({ tarotNameList: tarotName }));
  },
  addFortune: (ans) => {
    // 스토어에 저장하는 형식 변경 필요,,
    set((state) => ({ fortune: state.fortune + ans }));
  },
  setFortune: () => {
    set(() => ({ fortune: '' }));
  },
  setTarotList: (t) => {
    set((state) => ({ tarotList: [...t] }));
  },
  setSummary: (s) => {
    set(() => ({ summary: s }));
  },
}));
