import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './_modules/create-feedback/create-feedback.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
