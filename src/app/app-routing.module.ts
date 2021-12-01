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
    path: 'roadmap',
    loadChildren: () =>
      import('./_modules/roadmap/roadmap.module').then((m) => m.RoadmapModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
