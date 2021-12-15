import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getLengthOfComments } from 'src/app/helper/comments';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent implements OnInit {
  @Input() feedback!: Feedback;
  @Input() type!: string;
  @Input() commentsLen: number = 0;
  countVotes!: number;
  voteClicked: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.countVotes = this.feedback?.votes || 0;
  }

  toggleVote() {
    if (!this.voteClicked) {
      this.countVotes += 1;
      this.voteClicked = true;
    } else {
      this.countVotes -= 1;
      this.voteClicked = false;
    }
  }

  goDetail() {
    this.router.navigate(['feedback', this.feedback.id]);
  }
}
