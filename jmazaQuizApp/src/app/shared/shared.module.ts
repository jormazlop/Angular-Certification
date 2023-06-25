import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { QuotePipe } from './pipes/quote.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent,
    QuotePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    QuestionsComponent,
    QuestionComponent,
  ]
})
export class SharedModule { }
