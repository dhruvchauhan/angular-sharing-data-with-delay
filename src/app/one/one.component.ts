import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  searchField: FormControl = new FormControl();
  constructor(private ss: SearchService) { }

  ngOnInit() {
    this.searchField.valueChanges.subscribe(val => this.ss.setText(val));
  }

}