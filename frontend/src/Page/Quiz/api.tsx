import { shuffleArray } from './random';

export type Question = {
  answer: string;
  wrong1: string;
  wrong2: string;
  wrong3: string;
  content: string;
  card: any;
  cardIdx: number;
  idx: number;
};

export type QuestionsState = Question & { answers: string[] };

// export const fetchQuizQuestions = async (amount: number): Promise<QuestionsState[]> => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&type=multiple`;
//   const data = await (await fetch(endpoint)).json();
//   return data.results.map((question: Question) => ({
//     ...question,
//     answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
//   }));
// };

export const fetchQuizQuestions = async (amount: number): Promise<QuestionsState[]> => {
  const endpoint = `https://arcana.aeoragy.com/api/v1/quiz/quizlist`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  return data.map((content: Question) => ({
    ...content,
    cardIdx: JSON.parse(JSON.stringify(content.card)).idx,
    answers: shuffleArray([content.answer, content.wrong1, content.wrong2, content.wrong3]),
  }));
};
