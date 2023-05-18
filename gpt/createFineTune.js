import { openai } from './api.js'
import { fileId } from './fileId.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: 'davinci:ft-personal-2023-04-27-02-00-52'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()
