import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RoadmapComponent } from './roadmap.component';
import { RoadRoutingModule } from './roadmap-touting.module';
import { FeedbackCardModule } from 'src/app/_components/feedback-card/feedback-card.module';
import { CommonDirectivesModule } from 'src/app/shared/directives/common-directives.module';
import { CommonPipesModule } from 'src/app/shared/pipes/common-pipes.module';

@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RoadRoutingModule,
    FeedbackCardModule,
    CommonDirectivesModule,
    CommonPipesModule,
  ],
})
export class RoadmapModule {}
