import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
  private searchTextSource = new BehaviorSubject('');
  private searcText$ = this.searchTextSource.asObservable();
  constructor() { }

  getText():Observable<any> {
    return this.searcText$;
  }

  setText(text) {
    this.searchTextSource.next(text);
  }

}