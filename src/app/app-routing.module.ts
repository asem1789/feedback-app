import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'create-feedback',
    loadChildren: () =>
      import('./_modules/create-feedback/create-feedback.module').then(
        (m) => m.CreateFeedbackModule
      ),
  },
  {
    path: 'feedback/:id/edit',
    loadChildren: () =>
      import('./_modules/create-feedback/create-feedback.module').then(
        (m) => m.CreateFeedbackModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'roadmap',
    loadChildren: () =>
      import('./_modules/roadmap/roadmap.module').then((m) => m.RoadmapModule),
  },
  {
    path: 'feedback/:id',
    loadChildren: () =>
      import('./_modules/feedback-detail/feedback-detail.module').then(
        (m) => m.FeedbackDetailModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
