import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { getLengthOfComments } from 'src/app/helper/comments';
import { Feedback } from 'src/app/models/feedback';
import { VotesService } from 'src/app/shared/services/votes.service';

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

  constructor(private router: Router, private votesService: VotesService) {}

  @ViewChild('vote') voteBtn!: ElementRef;

  @HostListener('click', ['$event.target']) checkClick(target: any) {
    const isBtn = this.voteBtn.nativeElement.contains(target);

    if (!isBtn) {
      this.router.navigate(['feedback', this.feedback.id]);
    }
  }

  ngOnInit(): void {
    this.countVotes = this.feedback?.votes || 0;

    let votes = this.votesService.getALlVotes();
    if (votes) {
      votes.forEach((el) => {
        if (el === this.feedback.id) {
          this.countVotes += 1;
          this.voteClicked = true;
        }
      });
    }
  }

  toggleVote() {
    const isClicked = this.votesService.clickVotes(this.feedback.id!);

    if (isClicked) {
      this.countVotes += 1;
      this.voteClicked = true;
    } else {
      this.countVotes -= 1;
      this.voteClicked = false;
    }
  }
}
