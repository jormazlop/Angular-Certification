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

  questionSubscription?: Subscription;

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.questionSubscription = this.questionService.getAnswerList().subscribe((answerList: AnswerList) => {
      this.submitDisabled = !!answerList.answerList.find(answer => answer.answer == '');
    })
  }

  submitAnswers(): void {
    this.router.navigate(['../results'], {relativeTo: this.activatedRoute});
  }

  ngOnDestroy(): void {
    this.questionSubscription?.unsubscribe();
  }

}
