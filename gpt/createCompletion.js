import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-05-01-08-24-11',
      prompt: '[카드목록][The Sun, The Tower, The Empress, The Wheel of Fortune(Reverse), The Hierophant, Nine of Cups, The Moon, The Magician, Two of Wands(Reverse), Page of Pentacles] 카드가 있다. [방식] celtic-cross. 학업과 관련된 점을 보고 싶다. 1, 2번째 카드의 결과만 응답한다. [질문] 내일 시험인데 잘 볼 수 있을까?',
      max_tokens: 220
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()
