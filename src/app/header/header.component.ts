import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../services/main/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string | null = null;
  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      if(res && res['searchText']) {
        this.searchText = res['searchText'];
      } else {
        this.searchText = null;
      }
    })
  }

  onSearchChanged(event: any) {
    // this.mainService.searchEvent.next(this.searchText);

    if(this.searchText) {
      this.router.navigate(['questions'], {queryParams: {searchText: this.searchText}});
    } else {
      this.router.navigate(['questions']);
    }

  }

}
