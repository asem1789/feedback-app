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

@NgModule({
  declarations: [
    AppComponent,
    LogoCardComponent,
    FilterCardComponent,
    RoadmapCardComponent,
    SuggestBarComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
