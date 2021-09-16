import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionPageFilter, QuestionResponse } from '../dtos/question/question-filter.dto';
import { MainService } from '../services/main/main.service';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('fade', [
      state("void", style({opacity: 0, transform: 'translateY(50px)'})),
      transition("void => *, * => void", [
        animate(700)
      ])
    ])
  ]
})
export class QuestionListComponent implements OnInit, OnDestroy {

  loader = true;

  questionResponse: QuestionResponse | undefined ;

  pageFilter = new QuestionPageFilter();

  buttonsForPagination: any = [];
  errorMessage: any;
  sliceButtons: any = [];

  sub: Subscription | undefined;

  constructor(private questionService: QuestionService, private mainService: MainService) { }

  ngOnInit() {

    // For Header Main Search Handler 
    this.sub = this.mainService.getSearch().subscribe(search => {
      if(search) {
        this.loader= true;
        this.pageFilter.intitle = search;
        this.pageFilter.page = 1;
        this.questionService.searchQuestions(this.pageFilter).subscribe(res => {
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
      } else {
        this.pageFilter.intitle = null;
      }
    });

    this.filter();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
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
