import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-04-28-02-17-42',
      prompt: '[카드목록][Three of Cups, The Sun(Reverse), Two of Pentacles, The High Priestess, King of Swords(Reverse), Nine of Wands, Seven of Cups(Reverse), The Empress, The Tower(Reverse), Wheel of Fortune] 카드가 있다. [방식] celtic-cross. 학업과 관련된 점을 보고 싶다. 1, 2번째 카드의 결과만 응답한다. [질문] 중요한 시험을 앞두고 있습니다. 잘 볼 수 있을까요?',
      max_tokens: 300
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()
