import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByPipe } from './filter-by.pipe';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterByPipe, SortByPipe],
  exports: [FilterByPipe, SortByPipe],
})
export class CommonPipesModule {}
