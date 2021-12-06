import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackDetailComponent } from './feedback-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackDetailRouting {}
