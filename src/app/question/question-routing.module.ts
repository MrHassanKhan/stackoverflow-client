import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionListComponent } from './question.component';

const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '', component: QuestionListComponent },
    { path: ':questionId', component: QuestionDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
