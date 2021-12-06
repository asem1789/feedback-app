import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonDirectivesModule } from 'src/app/shared/directives/common-directives.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentsComponent } from 'src/app/_components/comments/comments.component';
import { FeedbackCardModule } from 'src/app/_components/feedback-card/feedback-card.module';
import { FeedbackDetailRouting } from './feedback-detail-routing';
import { FeedbackDetailComponent } from './feedback-detail.component';

@NgModule({
  declarations: [FeedbackDetailComponent, CommentsComponent],
  imports: [
    CommonModule,
    FeedbackDetailRouting,
    CommonDirectivesModule,
    MaterialModule,
    FeedbackCardModule,
    ReactiveFormsModule,
    // CommentsComponent,
  ],
})
export class FeedbackDetailModule {}