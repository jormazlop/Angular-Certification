export class AnswerList {

  answerList: Answer[];

  constructor() {
    this.answerList = [
      {id: 0, answer: '', answersList: []},
      {id: 1, answer: '', answersList: []},
      {id: 2, answer: '', answersList: []},
      {id: 3, answer: '', answersList: []},
      {id: 4, answer: '', answersList: []},
    ];
  }
}


export class Answer {
  id: number;
  answer: string;
  answersList: string[];

  constructor() {
    this.id = 0;
    this.answer = '';
    this.answersList = [];
  }
}
