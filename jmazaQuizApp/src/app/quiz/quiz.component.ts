import { Component } from '@angular/core';
import { QuestionsService } from '../shared/services/questions.service';
import { AnswerList } from '../shared/models/answer.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  submitDisabled = true;
  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.questionService.getAnswerList().subscribe((answerList: AnswerList) => {
        this.submitDisabled = answerList.answerList.some(answer => answer.answer == '');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe);
  }

  submitAnswers(): void {
    this.router.navigate(['../results'], {relativeTo: this.activatedRoute});
  }

}
