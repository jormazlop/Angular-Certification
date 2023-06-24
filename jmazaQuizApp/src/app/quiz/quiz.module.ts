import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    QuizComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export class QuizModule { }
