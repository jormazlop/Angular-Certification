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

  @Input({required: true}) answer: Answer = new Answer();

  @Input({required: true}) section = '';

  @Output() onUpdateAnswer = new EventEmitter<Answer>();

  ngOnInit(): void {
    if(this.section == 'quiz') {
      this.answer.answersList = [...this.question.incorrect_answers, this.question.correct_answer]
      this.answer.answersList =  this.answer.answersList.sort((a, b) => 0.5 - Math.random());
    }
  }

  isAnswerCorrect(answer: string): boolean {
    return answer === this.question.correct_answer;
  }

  onClickAnswer(answer: string): void {
    this.answer.answer = this.answer.answer === answer ? '' : answer;
    this.onUpdateAnswer.emit(this.answer);
  }
}
