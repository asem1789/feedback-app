import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    comments: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.feedbackForm.invalid) return;
    let data = { ...this.feedbackForm.value };
    console.log('data: ', data);
  }

  get f() {
    return this.feedbackForm.controls;
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
