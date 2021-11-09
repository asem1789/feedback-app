import { Component, OnInit } from '@angular/core';
import { SortTypes } from 'src/app/models/sort-types';

@Component({
  selector: 'app-suggest-bar',
  templateUrl: './suggest-bar.component.html',
  styleUrls: ['./suggest-bar.component.scss'],
})
export class SuggestBarComponent implements OnInit {
  OPTIONS = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];

  selected: string = 'Most Upvotes';
  showList: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  selectOption(value: string) {
    this.selected = value;
    console.log(value);
    //   this.showList = false;
  }

  toggleList() {
    this.showList = !this.showList;
  }
}
