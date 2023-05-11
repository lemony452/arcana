import { create } from 'zustand';

export interface CardState {
  card: {
    idx: number;
    name: string;
  };
  ment: string;
}

interface SaveDataType {
  option: string;
  summary: string;
  question: string;
  cards: CardState[];
}

interface SaveDataState {
  saveData: SaveDataType;
  setSaveData: (savedata: SaveDataType) => void;
}

interface FortuneState {
  fortune: string[];
  tarotList: CardState[];
  tarotNameList: string;
  option: string;
  inputValue: string;
  spread: string;
  summary: string;
  question: string;
  setQuestion: (qusetion: string) => void;
  setSpread: (spread: string) => void;
  setInputValue: (v: string) => void;
  setOption: (opt: string) => void;
  setTarotList: (t: CardState[]) => void;
  setTarotNameList: (tarot: string) => void;
  addFortune: (ans: string[]) => void;
  setFortune: (fortune: string[]) => void;
  setSummary: (s: string) => void;
}

export const saveDataStore = create<SaveDataState>((set) => ({
  saveData: {
    option: '',
    summary: '',
    question: '',
    cards: [
      {
        card: {
          idx: 0,
          name: '',
        },
        ment: '',
      },
    ],
  },
  setSaveData: (sd: SaveDataType) => {
    set(() => ({ saveData: sd }));
  },
}));

export const useFortuneStore = create<FortuneState>((set) => ({
  fortune: [],
  tarotList: [],
  tarotNameList: '',
  option: '',
  inputValue: '',
  spread: '',
  summary: '',
  question: '',
  setQuestion: (q) => {
    set(() => ({ question: q }));
  },
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
    set((state) => ({ fortune: state.fortune.concat(ans) }));
  },
  setFortune: () => {
    set(() => ({ fortune: [] }));
  },
  setTarotList: (t) => {
    set(() => ({ tarotList: t }));
  },
  setSummary: (s) => {
    set(() => ({ summary: s }));
  },
}));
