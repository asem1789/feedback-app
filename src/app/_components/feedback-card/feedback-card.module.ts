import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FeedbackCardComponent } from './feedback-card.component';

@NgModule({
  declarations: [FeedbackCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FeedbackCardComponent],
})
export class FeedbackCardModule {}
