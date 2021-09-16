import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string | null = null;
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSearchChanged(event: any) {
    this.mainService.searchEvent.next(this.searchText);
  }

}
