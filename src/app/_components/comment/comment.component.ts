import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback, Comments } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  activeComment: boolean = false;
  nestedComment: any[] | null = null;

  reply = new FormControl('', Validators.required);

  constructor(
    private feedbackService: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.comment);
  }

  toggleReply() {
    this.activeComment = !this.activeComment;
  }

  postReply() {
    let feedId = this.router.url.split('/').pop();
    if (feedId) {
      this.feedbackService.addReplyToComment(
        feedId,
        this.comment.id,
        this.reply.value
      );
    }

    this.reply.setValue('');
    this.activeComment = false;
  }
}
