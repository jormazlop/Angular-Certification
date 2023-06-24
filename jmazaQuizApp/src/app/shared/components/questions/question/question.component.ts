import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input({required: true}) question: Question = new Question();

  @Input({required: true}) answer?: Answer;

  @Input() newQuestions = false;

  @Output() onUpdateAnswer = new EventEmitter<string>();

  answerList: string[] = [];

  selectedAnswer = '';

  ngOnInit(): void {
    this.answerList = [...this.question.incorrect_answers, this.question.correct_answer]
    this.answerList = this.answerList.sort((a, b) => 0.5 - Math.random());
    this.selectedAnswer = this.answer!.answer;
  }

  isAnswerCorrect(answer: string): boolean {
    return answer === this.question.correct_answer;
  }

  onClickAnswer(answer: string): void {
    this.selectedAnswer = this.selectedAnswer === answer ? '' : answer;
    this.onUpdateAnswer.emit(this.selectedAnswer);
  }
}
