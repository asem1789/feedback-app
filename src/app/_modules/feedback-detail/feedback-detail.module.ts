import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonDirectivesModule } from 'src/app/shared/directives/common-directives.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentComponent } from 'src/app/_components/comment/comment.component';
import { FeedbackCardModule } from 'src/app/_components/feedback-card/feedback-card.module';
import { FeedbackDetailRouting } from './feedback-detail-routing';
import { FeedbackDetailComponent } from './feedback-detail.component';

@NgModule({
  declarations: [FeedbackDetailComponent, CommentComponent],
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
