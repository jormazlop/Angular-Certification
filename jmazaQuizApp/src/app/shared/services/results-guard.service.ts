import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsGuard  {

  constructor(private router: Router, private questionsService: QuestionsService) { }

  canActivate() {
    if (this.questionsService.getQuestions().length == 0) {
      this.router.navigate(['/quiz']);
    }
    return true;
  }
}
