import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter.model';

import { Question } from 'src/app/shared/models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { FilterService } from '../../services/filter.service';
import { Answer, AnswerList } from '../../models/answer.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  answerList: AnswerList = new AnswerList();
  loadingQuestion = false;
  questionList: Question[] = [];
  @Input() section = '';
  subscriptions: Subscription[] = [];

  constructor(
    private filterService: FilterService,
    private questionsService: QuestionsService
  ) {}

  private refreshQuestions(filter: Filter): void {
    this.loadingQuestion = true;
    this.subscriptions.push(
      this.questionsService.generateNewQuestions(filter).subscribe((questionList: Question[]) => {
        this.loadingQuestion = false;
        this.questionList = questionList;
      })
    )
  }

  ngOnInit(): void {
    if (this.section === 'quiz') {
      this.subscriptions.push(
        this.filterService.getFilter().subscribe((newFilter: Filter) => {
          this.refreshQuestions(newFilter);
        })
      );
    } else {
      this.questionList = this.questionsService.getQuestions();
    };

    this.questionsService.answerList$.subscribe(answerList => {
      this.answerList = answerList;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe);
  }

  updateAnswers(answer: Answer): void {
    this.questionsService.updateAnswerList(answer);
  }
}
