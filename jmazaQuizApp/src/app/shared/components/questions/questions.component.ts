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

  filterSubscription = new Subscription();
  questionList: Question[] = [];
  answerList: AnswerList = new AnswerList();
  loadingQuestion = false;

  @Input() newQuestions = false;

  constructor(
    private filterService: FilterService,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {

    if (this.newQuestions) {
      this.filterSubscription = this.filterService.getFilter().subscribe((newFilter: Filter) => {
        this.refreshQuestions(newFilter);
      });
    } else {
      this.questionList = this.questionsService.getQuestions();
    }

    this.questionsService.answerList$.subscribe(answerList => {
      this.answerList = answerList;
    })
  }

  refreshQuestions(filter: Filter): void {
    this.loadingQuestion = true;
    this.questionsService.generateNewQuestions(filter).subscribe((questionList: Question[]) => {
      this.loadingQuestion = false;
      this.questionList = questionList;
    })
  }

  updateAnswers(answer: Answer): void {
    this.questionsService.updateAnswerList(answer);
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }
}
