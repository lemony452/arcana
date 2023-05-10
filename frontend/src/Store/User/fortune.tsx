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
  tarotNameList:
    'The Fool, Eight of Swords(Reverse), Page of Swords(Reverse), Page of Cups, Ace of Pentacles(Reverse), The Magician, Three of Swords, Ten of Cups, The Hanged Man(Reverse), The Fool, Four of Wands(Reverse), Eight of Pentacles(Reverse)',
  option: '사랑운',
  inputValue: '내 사랑운을 봐줘',
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
