import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';
import { ResultsGuard } from '../shared/services/results-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    canActivate:[ResultsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
