import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item, QuestionResponse } from 'src/app/dtos/question/question-filter.dto';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  questionId: number | null = null;
  loader = true;
  questionResponse: Item|null = null;
  relatedQuestionResponse: Item[] | null = null;
  answerResponse: Item[] | null = null;
  constructor( private route: ActivatedRoute, private questionService: QuestionService,
    private router: Router ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.loader = true;
        this.questionId = Number(params.get('questionId'));
        return forkJoin([
          this.questionService.getById(this.questionId), 
          this.questionService.getRelatedQuestionsById(this.questionId),
          this.questionService.getCommentsByQuestionId(this.questionId)
        ]);
      })
    ).subscribe(res => {
      this.questionResponse = res[0].items && res[0].items.length ? res[0].items[0] : null;
      this.relatedQuestionResponse = res[1] && res[1].items.length ? res[1].items : null;
      this.answerResponse = res[2] && res[2].items.length ? res[2].items : null;
      this.loader = false
    });
    // this.questionId = this.route.snapshot.paramMap.get('questionId');
  }

}
