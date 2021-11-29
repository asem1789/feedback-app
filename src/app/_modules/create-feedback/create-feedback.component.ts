import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.scss'],
})
export class CreateFeedbackComponent implements OnInit {
  options = ['ui', 'ux', 'enhancement', 'bug', 'feature'];
  feedbackForm = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.feedbackForm.invalid) return;
    let data: Feedback = {
      ...this.feedbackForm.value,
      id: `${Date.now() + 1}`,
      status: 'suggestion',
      votes: 0,
      comments: [],
    };

    this.feedbackService.addFeedback(data).then(() => {
      this.router.navigate(['/']);
    });
  }

  get f() {
    return this.feedbackForm.controls;
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
