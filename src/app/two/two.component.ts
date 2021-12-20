import { Component, OnInit } from '@angular/core';
import { debounceTime, delay } from 'rxjs/operators';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  textSearch = '';
  constructor(private ss: SearchService) {}

  ngOnInit() {
    this.ss
      .getText()
      .pipe(debounceTime(500))
      .subscribe((s) => (this.textSearch = s));
  }
}
