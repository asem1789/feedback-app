import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(items: Feedback[], value: string, key: string): any[] {
    if (key === 'category' && value === 'all') {
      return items;
    }

    if (items.length <= 0 || !value) {
      return items;
    }
    return items.filter((el) => el[key as keyof Feedback] === value);
  }
}
