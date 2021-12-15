import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent {
  @Output() category = new EventEmitter();

  OPTIONS = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  selected: string = 'All';

  selectOption(option: string) {
    this.selected = option;
    this.category.emit(option.toLowerCase());
  }
}
