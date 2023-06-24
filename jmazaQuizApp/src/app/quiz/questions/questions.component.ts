import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Subscription } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter.model';
import { QuestionsService } from '../services/questions.service';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  filterSubscription = new Subscription();

  questionList: Question[] = [];
  loadingQuestion = false;

  constructor(private filterService: FilterService, private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.filterSubscription = this.filterService.getFilter().subscribe((newFilter: Filter) => {
      this.refreshQuestions(newFilter);
    });
  }

  refreshQuestions(filter: Filter): void {
    this.loadingQuestion = true;
    this.questionsService.getQuestions(filter).subscribe((questionList: Question[]) => {
      this.loadingQuestion = false;
      this.questionList = questionList;
    })
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }
}
