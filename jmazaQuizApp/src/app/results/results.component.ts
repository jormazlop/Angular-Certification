import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/services/questions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  finalNote = 0;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  getScoreColor(): string {
    if (this.finalNote < 2) {
      return 'red';
    } else if (this.finalNote < 4) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  ngOnInit(): void {
    this.finalNote = this.questionsService.getFinalNote();
  }

  onCreateNewQuiz(): void {
    this.questionsService.initializeQuestions();
    this.router.navigate(['../quiz'], {relativeTo: this.activatedRoute});
  }
}
