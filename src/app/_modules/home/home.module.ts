import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LogoCardComponent } from 'src/app/_components/logo-card/logo-card.component';
import { FilterCardComponent } from 'src/app/_components/filter-card/filter-card.component';
import { RoadmapCardComponent } from 'src/app/_components/roadmap-card/roadmap-card.component';
import { CommonModule } from '@angular/common';
import { SuggestBarComponent } from 'src/app/_components/suggest-bar/suggest-bar.component';
import { FeedbackCardComponent } from 'src/app/_components/feedback-card/feedback-card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';
import { CommonDirectivesModule } from 'src/app/shared/directives/common-directives.module';

@NgModule({
  declarations: [
    HomeComponent,
    LogoCardComponent,
    FilterCardComponent,
    RoadmapCardComponent,
    SuggestBarComponent,
    FeedbackCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    CommonDirectivesModule,
  ],
})
export class HomeModule {}
