import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.scss'],
})
export class CreateFeedbackComponent implements OnInit {
  options = ['ui', 'ux', 'enhancement', 'bug', 'feature'];
  isEdit: boolean = false;

  feedbackForm = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let idParam = params.get('id');
      if (idParam) {
        let feeds = this.feedbackService.getAllFeedback();
        if (feeds) {
          let feed = this.getFeedbackById(feeds, idParam);
          this.setEditValues(feed);
          this.isEdit = true;
        }

        this.feedbackService.feedbackChange.subscribe((feeds) => {
          if (idParam) {
            let feed = this.getFeedbackById(feeds, idParam);
            this.setEditValues(feed);
            this.isEdit = true;
          }
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  getFeedbackById(feeds: Feedback[], id: string): Feedback {
    let item = feeds && feeds.filter((el) => el.id === id);
    return item[0];
  }

  setEditValues(feed: Feedback) {
    let { title, category, description } = feed;
    this.feedbackForm.patchValue({ title, category, description });
  }

  onSubmit() {
    if (this.feedbackForm.invalid) return;

    /**
     * @Make_condition_based_on_isEdit
     */
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
