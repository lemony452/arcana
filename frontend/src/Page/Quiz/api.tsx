import { shuffleArray } from './random';
import { API } from '../../API';

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
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

export const fetchQuizQuestions = async () => {
  await API.get(`/api/v1/quiz/quizlist`).then((res) => console.log(res.data));
};
