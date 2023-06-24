export class AnswerList {

  answerList: Answer[];

  constructor() {
    this.answerList = [
      {id: 0, answer: ''},
      {id: 1, answer: ''},
      {id: 2, answer: ''},
      {id: 3, answer: ''},
      {id: 4, answer: ''},
    ];
  }
}


export interface Answer {
  id: number;
  answer: string;
}
