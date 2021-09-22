import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionPageFilter, QuestionResponse } from '../dtos/question/question-filter.dto';
import { MainService } from '../services/main/main.service';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    // trigger('fade', [
      // state("void", style({opacity: 0, transform: 'translateY(50px)'})),
    //   transition("void => *, * => void", [
    //     animate(700),
    //     stagger(-30, [
    //       animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
    //     ])
    //   ])
    // ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('#votes, #question', [
          style({opacity: 0, transform: 'translateX(-100px)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })

      ])
    ]),
    // trigger('filterAnimation', [
    //   transition(':enter, * => 0, * => -1', []),
    //   transition(':increment', [
    //     query(':enter', [
    //       style({ opacity: 0, width: '0px' }),
    //       stagger(50, [
    //         animate('300ms ease-out', style({ opacity: 1, width: '*' })),
    //       ]),
    //     ], { optional: true })
    //   ]),
    //   transition(':decrement', [
    //     query(':leave', [
    //       stagger(50, [
    //         animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
    //       ]),
    //     ])
    //   ]),
    // ]),
  ]
})
export class QuestionListComponent implements OnInit, OnDestroy {

  loader = true;

  questionResponse: QuestionResponse | undefined ;

  pageFilter = new QuestionPageFilter();

  buttonsForPagination: any = [];
  errorMessage: any;
  sliceButtons: any = [];

  questionTypes = [
    {
      title: 'Activity',
      key: 'activity'
    },
    {
      title: 'Hot',
      key: 'hot'
    },
    {
      title: 'Week',
      key: 'week'
    },
    {
      title: 'Month',
      key: 'month'
    },
    {
      title: 'Creation',
      key: 'creation'
    },
    {
      title: 'Votes',
      key: 'votes'
    }
  ]

  sub: Subscription | undefined;

  constructor(private questionService: QuestionService, private mainService: MainService, private route: ActivatedRoute) { }

  ngOnInit() {

    

    this.route.queryParams.subscribe(res => {
      if(res && res['searchText']) {
        this.loadDataBySearch(res['searchText']);
      } else {
        this.pageFilter.intitle = null;
        this.filter();
      }
    })
    // For Header Main Search Handler 
    // this.sub = this.mainService.getSearch().subscribe(search => {
    //   if(search) {
    //     this.loader= true;
    //     this.pageFilter.intitle = search;
    //     this.pageFilter.page = 1;
    //     this.questionService.searchQuestions(this.pageFilter).subscribe(res => {
    //       this.questionResponse = res;
    //       // for Creating Pagination Buttons 
    //       const maxButton = Number(this.questionResponse.quota_max/this.pageFilter.pageSize);
    //       this.buttonsForPagination = [];
    //       for (let index = 1; index <= maxButton; index++) {
    //         this.buttonsForPagination.push(index);
    //       }
    //       this.sliceButtons = this.buttonsForPagination.slice(this.pageFilter.page-1, ((this.pageFilter.page + 4) > this.buttonsForPagination.length ? this.buttonsForPagination.length : (this.pageFilter.page + 4)));
    //       this.loader = false;
    //     }, err => {
    //       this.errorMessage = err;
    
    //       setTimeout(() => {
    //         this.errorMessage = null;
    //       }, 5000);
    //       this.loader = false;
    //     })
    //   } else {
    //     this.pageFilter.intitle = null;
    //   }
    // });

    
  }


  loadDataBySearch(search: string) {
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
    });
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
