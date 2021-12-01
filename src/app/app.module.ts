import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material/material.module';
import { LogoCardComponent } from './_components/logo-card/logo-card.component';
import { FilterCardComponent } from './_components/filter-card/filter-card.component';
import { RoadmapCardComponent } from './_components/roadmap-card/roadmap-card.component';
import { SuggestBarComponent } from './_components/suggest-bar/suggest-bar.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { FeedbackCardComponent } from './_components/feedback-card/feedback-card.component';
import { HomeModule } from './_modules/home/home.module';
import { CreateFeedbackComponent } from './_modules/create-feedback/create-feedback.component';
import { SelectComponent } from './_components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFeedbackModule } from './_modules/create-feedback/create-feedback.module';
// import { RoadmapComponent } from './_modules/roadmap/roadmap.component';
// import { FilterByPipe } from './shared/pipes/filter-by.pipe';
// import { SideBarComponent } from './_components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    // FeedbackCardMapComponent,
    // RoadmapComponent,
    // FilterByPipe,
    // CreateFeedbackComponent,
    // SelectComponent,
    // SideBarComponent,
    // LogoCardComponent,
    // FilterCardComponent,
    // RoadmapCardComponent,
    // SuggestBarComponent,
    // ClickOutsideDirective,
    // FeedbackCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
