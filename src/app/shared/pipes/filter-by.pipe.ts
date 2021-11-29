import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(items: Feedback[], type: string): Feedback[] {
    if (items.length <= 0 || !type) {
      return items;
    }

    let sortedItems!: Feedback[];
    switch (type) {
      case 'most-upvotes':
        sortedItems = items.sort((a, b) => b.votes! - a.votes!);
        break;
      case 'least-upvotes':
        sortedItems = items.sort((a, b) => a.votes! - b.votes!);
        break;
      case 'most-comments':
        sortedItems = items.sort(
          (a, b) => b.comments?.length! - a.comments?.length!
        );
        break;
      case 'least-comments':
        sortedItems = items.sort(
          (a, b) => a.comments?.length! - b.comments?.length!
        );
        break;
      default:
        sortedItems = [...items];
    }

    return sortedItems;
  }
}
