import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent implements OnInit {
  feedbackData: Feedback[] = [];
  activeTap: string = 'planned';
  isSmall: boolean = false;

  constructor(private router: Router, private feedService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackData = this.feedService.getAllFeedback() || [];
    console.log('in onInit: ', this.feedbackData);

    this.feedService.feedbackChange.subscribe((feeds) => {
      this.feedbackData = feeds;
      console.log('inside subsciribe: ', this.feedbackData);
    });
  }

  numStatus(value: string): number {
    return this.feedbackData.filter((el) => el.status === value).length;
  }

  changeTap(value: string): void {
    this.activeTap = value;
  }

  onClickCreate() {
    this.router.navigate(['/create-feedback']);
  }

  @HostListener('window:resize', ['$event.target']) resize(target: any) {
    const width = target.innerWidth;
    if (width >= 777) {
      this.isSmall = false;
    } else {
      this.isSmall = true;
    }
  }
}
