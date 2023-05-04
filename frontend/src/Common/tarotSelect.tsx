import { tarot, TarotType } from './tarot';

export function getTarot(numberCards: number) {
  const nums: number[] = [];
  const cards: TarotType[] = [];

  function sameNum(n: number) {
    return nums.find((e: number) => e === n);
  }

  while (nums.length < numberCards) {
    const num = Math.floor(Math.random() * 77);

    if (!sameNum(num)) {
      nums.push(num);
    }
  }

  nums.forEach((element: number) => {
    // 0.5 미만이면 정방향
    if (Math.random() < 0.5) {
      cards.push(tarot[element]);
    }
    // 0.5 이상이면 역방향
    else {
      cards.push(tarot[element + 78]);
    }
  });

  // for (const num of nums) {
  //   // 0.5 미만이면 정방향
  //   if (Math.random() < 0.5) {
  //       cards.push(tarot[num])
  //   }
  //   // 0.5 이상이면 역방향
  //   else {
  //       cards.push(tarot[num + 78])
  //   }
  // }

  return cards;
}

export function getTarotNames(tarots: TarotType[]) {
  let names = '';

  for (let i = 0; i < tarots.length - 1; i += 1) {
    names += tarots[i].name;
    names += ', ';
  }

  // tarots.forEach((element: TarotType) => {
  //   names += element.name;
  //   names += ', ';
  // });
  // for (const tarot of tarots) {
  //     names += tarot["name"];
  //     names += ", ";
  // }

  names = names.substring(0, names.length - 2);

  return names;
}
