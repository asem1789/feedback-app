import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RoadmapComponent } from './roadmap.component';
import { RoadRoutingModule } from './roadmap-touting.module';
import { FeedbackCardComponent } from 'src/app/_components/feedback-card/feedback-card.component';
import { FeedbackCardModule } from 'src/app/_components/feedback-card/feedback-card.module';
import { FilterByPipe } from 'src/app/shared/pipes/filter-by.pipe';
import { CommonDirectivesModule } from 'src/app/shared/directives/common-directives.module';

@NgModule({
  declarations: [RoadmapComponent, FilterByPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RoadRoutingModule,
    FeedbackCardModule,
    CommonDirectivesModule,
  ],
})
export class RoadmapModule {}
