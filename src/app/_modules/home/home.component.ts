import { Component, OnInit } from '@angular/core';
import { getLengthOfComments } from 'src/app/helper/comments';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSideOpen: boolean = false;
  feedbackData: Feedback[] = [];
  sorted: string = 'most-upvotes';
  filterItem: string = 'all';

  constructor(private feedService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackData = this.feedService.getAllFeedback() || [];

    this.feedService.feedbackChange.subscribe((feeds) => {
      this.feedbackData = feeds;
    });
  }

  toggleSide() {
    this.isSideOpen = !this.isSideOpen;
  }

  sortBy(value: any) {
    this.sorted = value;
  }

  filterBy(value: string, isSide: boolean = false) {
    this.filterItem = value;
    if (isSide) {
      this.isSideOpen = false;
    }
  }

  getLength(comments: any[]) {
    return getLengthOfComments(comments);
  }
}
