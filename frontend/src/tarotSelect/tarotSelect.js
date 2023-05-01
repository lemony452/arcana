import tarot from './tarot.js';

function getTarot(numberCards) {
  const nums = [];
  const cards = [];

  while (nums.length <= numberCards) {
    const n = Math.floor(Math.random() * 77);

    if (!sameNum(n)) {
      nums.push(n);
    }
  }

  for (const num of nums) {
    // 0.5 미만이면 정방향
    if (Math.random() < 0.5) {
      cards.push(tarot[num]);
    }
    // 0.5 이상이면 역방향
    else {
      cards.push(tarot[num + 78]);
    }
  }

  function sameNum(n) {
    return nums.find((e) => e === n);
  }

  return cards;
}

function getTarotNames(tarots) {
  let names = '';

  for (const tarot of tarots) {
    names += tarot.name;
    names += ', ';
  }

  names = names.substring(0, names.length - 2);

  return names;
}

export { getTarot, getTarotNames };
