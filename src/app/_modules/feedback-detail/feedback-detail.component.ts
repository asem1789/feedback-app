import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss'],
})
export class FeedbackDetailComponent implements OnInit {
  feedback!: Feedback;
  comment = new FormControl('', Validators.required);

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      let feeds = this.feedbackService.getAllFeedback();
      if (feeds) {
        this.feedback = feeds.filter((el) => el.id === params.get('id'))[0];
      }

      this.feedbackService.feedbackChange.subscribe((feeds: Feedback[]) => {
        this.feedback = feeds.filter((el) => el.id === params.get('id'))[0];
      });
    });
  }

  editFeedback() {
    this.router.navigate(['/feedback', this.feedback.id, 'edit']);
  }
}
