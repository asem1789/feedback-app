import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feedback } from '../models/feedback';
import { getFeedback } from './feedback-data';
import { sortBy } from './utils';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  feedbackChange = new Subject<any>();
  private feedback!: Feedback[];
  constructor() {}

  fetchAvailableFeedback() {
    getFeedback()
      .then((res: any) => {
        let resSorted = sortBy(res, 'votes');
        this.feedbackChange.next(resSorted);
        this.feedback = resSorted;
      })
      .catch((err) => {
        this.feedbackChange.error(err);
        console.log('error fetch data: ', err);
      });
  }

  getAllFeedback() {
    return this.feedback;
  }
}
