import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { QuestionPageFilter, QuestionResponse } from '../dtos/question/question-filter.dto';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('fade', [
      transition("void => *", [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class QuestionListComponent implements OnInit {

  loader = true;

  questionResponse: QuestionResponse | undefined ;

  pageFilter = new QuestionPageFilter();

  buttonsForPagination: any = [];
  errorMessage: any;
  sliceButtons: any = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {

    this.filter();
  }


  filter() {
    this.loader = true;
    this.pageFilter.page = 1;
    this.search()   
  }

  search() {
    this.questionService.filterQuestions(this.pageFilter).subscribe(res => {
      this.questionResponse = res;
      // for Creating Pagination Buttons 
      const maxButton = Number(this.questionResponse.quota_max/this.pageFilter.pageSize);
      this.buttonsForPagination = [];
      for (let index = 1; index <= maxButton; index++) {
        this.buttonsForPagination.push(index);
      }
      this.sliceButtons = this.buttonsForPagination.slice(this.pageFilter.page-1, ((this.pageFilter.page + 4) > this.buttonsForPagination.length ? this.buttonsForPagination.length : (this.pageFilter.page + 4)));
      this.loader = false;
    }, err => {
      this.errorMessage = err;

      setTimeout(() => {
        this.errorMessage = null;
      }, 5000);
      this.loader = false;
    })
  }

  paginationClicked(page: number) {
    this.pageFilter.page = page;
    this.search();
  }
}
