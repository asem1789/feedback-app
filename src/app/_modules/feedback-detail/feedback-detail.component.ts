import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getLengthOfComments } from 'src/app/helper/comments';
import { Feedback, Comments } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss'],
})
export class FeedbackDetailComponent implements OnInit {
  feedback!: Feedback;
  comment = new FormControl('', Validators.required);
  commentLength: number = 0;
  feedId!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.feedId = params.get('id') || '';
      let feeds = this.feedbackService.getAllFeedback();
      if (feeds) {
        this.feedback = feeds.filter((el) => el.id === this.feedId)[0];
        this.commentLength = getLengthOfComments(this.feedback.comments || []);
      }

      this.feedbackService.feedbackChange.subscribe((feeds: Feedback[]) => {
        this.feedback = feeds.filter((el) => el.id === this.feedId)[0];
        this.commentLength = getLengthOfComments(this.feedback.comments || []);
      });
    });
  }

  editFeedback() {
    this.router.navigate(['/feedback', this.feedback.id, 'edit']);
  }

  postComment() {
    this.feedbackService.addCommentToPost(this.feedId, this.comment.value);
    this.comment.reset();
    this.comment.setValue('');
  }
}
