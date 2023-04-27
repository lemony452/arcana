import { Configuration, OpenAIApi } from 'openai'
// const openaiApiKey = process.env.OPENAI_KEY
const openaiApiKey = "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"
const configuration = new Configuration({
  apiKey: openaiApiKey,
})
export const openai = new OpenAIApi(configuration)