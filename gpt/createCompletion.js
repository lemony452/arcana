import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-04-27-03-15-48',
      prompt: '메이저 타로카드 22장 중에 하나를 선택해서 그 카드를 기반으로 나를 축복해줘.',
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
