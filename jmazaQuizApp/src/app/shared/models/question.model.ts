export class Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;

  constructor() {
    this.category = '';
    this.correct_answer = '';
    this.difficulty = '';
    this.incorrect_answers = [];
    this.question = '';
    this.type = '';
  }
}

export interface QuestionAPI {
  response_code: number;
  results: Question[];
}
