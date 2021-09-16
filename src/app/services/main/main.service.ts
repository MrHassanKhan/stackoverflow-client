import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MainService {

    public searchEvent: Subject<string| null> = new Subject();

    private searchObs$ = this.searchEvent.asObservable();

    constructor() { }


    getSearch() {
        return this.searchObs$;
    }
    
}