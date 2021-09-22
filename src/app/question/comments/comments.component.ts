import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnChanges {

  @Input() answerId: any = null;

  @Input() questionId: any = null;

  loader = false;
  errorMessage = null;

  comments:any = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if(simpleChanges.answerId && simpleChanges.answerId.currentValue) {
      this.loader = true;
      this.getByAnswerId(simpleChanges.answerId.currentValue)
    } else if(simpleChanges.questionId && simpleChanges.questionId.currentValue) {
      this.loader = true;
      this.getByQuestionId(simpleChanges.questionId.currentValue)
    }
  }

  getByAnswerId(answerId: any) {
    this.questionService.getCommentsByAnswerId(answerId).subscribe(res => {
      this.comments = res && res.items.length ? res.items : null;
      this.loader = false;
    }, err => {
      this.errorMessage = err;
      setTimeout(() => {
        this.errorMessage = null;
      }, 4000);
    });
  }

  getByQuestionId(questionId: any) {
    this.questionService.getCommentsByQuestionId(questionId).subscribe(res => {
      this.comments = res && res.items.length ? res.items : null;
      this.loader = false;
    }, err => {
      this.errorMessage = err;
      setTimeout(() => {
        this.errorMessage = null;
      }, 4000);
    });
  }

}
