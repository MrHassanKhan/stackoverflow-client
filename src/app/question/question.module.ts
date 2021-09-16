import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { SharedModule } from '../shared/share.module';
import { QuestionService } from '../services/question/question.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuestionRoutingModule
  ],
  declarations: [QuestionListComponent, QuestionDetailComponent],
  providers: [QuestionService]
})
export class QuestionModule { }
