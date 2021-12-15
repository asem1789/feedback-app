import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { SortTypes } from 'src/app/models/sort-types';

@Component({
  selector: 'app-suggest-bar',
  templateUrl: './suggest-bar.component.html',
  styleUrls: ['./suggest-bar.component.scss'],
})
export class SuggestBarComponent implements OnInit {
  @Input() feedsNum: number = 0;
  @Output() option = new EventEmitter();
  OPTIONS = [
    { text: 'Most Upvotes', value: 'most-upvotes' },
    { text: 'Least Upvotes', value: 'least-upvotes' },
    { text: 'Most Comments', value: 'most-comments' },
    { text: 'Least Comments', value: 'least-comments' },
  ];

  selected: SortTypes = { text: 'Most Upvotes', value: 'most-upvotes' };
  showList: boolean = false;

  constructor(private router: Router) {}

  @ViewChild('value') value!: ElementRef;

  ngOnInit(): void {}

  selectOption(option: SortTypes) {
    this.selected = option;
    this.value.nativeElement.textContent = option.text;
    this.showList = false;
    this.option.emit(option.value);
  }

  toggleList() {
    this.showList = !this.showList;
  }

  navFeedback() {
    this.router.navigate(['create-feedback']);
  }
}
