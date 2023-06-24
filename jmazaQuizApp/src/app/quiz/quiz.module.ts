import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuotePipe } from './pipes/quote.pipe';

@NgModule({
  declarations: [
    QuizComponent,
    FilterComponent,
    QuestionsComponent,
    QuestionComponent,
    QuotePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
