import { create } from 'zustand';

interface FortuneState {
  fortune: string[];
  tarotNumList: any[];
  tarotList: string;
  option: string;
  inputValue: string;
  spread: string;
  setSpread: (spread: string) => void;
  setInputValue: (v: string) => void;
  setOption: (opt: string) => void;
  setTarotNumList: (t: any[]) => void;
  setTarotList: (tarot: string) => void;
  addFortune: (ans: any[]) => void;
  setFortune: (fortune: string[]) => void;
}

export const useFortuneStore = create<FortuneState>((set) => ({
  fortune: [
    '너를 지지해줄 사람들이 많다는 것을 의미해',
    '너 자신의 마음을 잘 이해하고 받아들이는 것이 중요해',
    '신중하게 고민하고 균형 있게 선택하는 것이 좋아',
    '너의 감정에 귀 기울이면, 너는 사랑에 대한 더욱 깊은 이해와 인연을 만들어 갈 수 있을 거야',
    '극복하기 위해서 먼저 너 자신의 감정에 집중하고, 이를 이해하려 노력해야 해',
    '목표를 달성하고 성공을 이루기 위해 마지막으로 남은 노력을 기울이는 것이 중요해',
    '네가 분명한 목표를 세우고 미래에 대한 계획을 세워야 한다는 것을 상기시키는 카드야',
    '창조적인 아이디어와 새로운 가능성들이 너를 둘러싸고 있음을 보여줘',
    '너 자신을 보호하며 안정된 삶을 되찾기 위해 노력해야 해',
    '좋은 운을 누리고, 기회와 행운이 너의 삶에 찾아올 거야',
  ],
  tarotNumList: [],
  tarotList:
    'Three of Cups, The Sun(Reverse), Two of Pentacles, The High Priestess, King of Swords(Reverse), Nine of Wands, Seven of Cups(Reverse), The Empress, The Tower(Reverse), Wheel of Fortune',
  option: '사랑운',
  inputValue: '내 사랑운을 봐줘',
  spread: '',
  setSpread: (s) => {
    set(() => ({ spread: s }));
  },
  setInputValue: (v) => {
    set(() => ({ inputValue: v }));
  },
  setOption: (opt) => {
    set(() => ({ option: opt }));
  },
  setTarotList: (tarot) => {
    set(() => ({ tarotList: tarot }));
  },
  addFortune: (ans) => {
    // 스토어에 저장하는 형식 변경 필요,,
    set((state) => ({ fortune: [...state.fortune, ...ans] }));
  },
  setFortune: () => {
    set(() => ({ fortune: [] }));
  },
  setTarotNumList: (t) => {
    set((state) => ({ tarotNumList: [...state.tarotNumList, ...t] }));
  },
}));
