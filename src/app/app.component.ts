import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './_services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'feedback';

  constructor(private fbService: FeedbackService) {}

  ngOnInit() {
    this.fbService.fetchAvailableFeedback();
  }
}
