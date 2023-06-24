import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input({required: true}) question: Question = new Question();
  answerList: string[] = [];

  ngOnInit(): void {
    this.answerList = [...this.question.incorrect_answers, this.question.correct_answer]
  }

}
