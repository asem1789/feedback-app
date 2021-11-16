import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent implements OnInit {
  countVotes: number = 12;
  voteClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleVote() {
    if (!this.voteClicked) {
      this.countVotes += 1;
      this.voteClicked = true;
    } else {
      this.countVotes -= 1;
      this.voteClicked = false;
    }
  }
}
