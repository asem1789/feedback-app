import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(items: Feedback[], status: string): any[] {
    if (items.length <= 0 || !status) {
      return items;
    }
    return items.filter((el) => el.status === status);
  }
}
