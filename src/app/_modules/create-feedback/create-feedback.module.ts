import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFeedbackComponent } from './create-feedback.component';
import { CommonDirectivesModule } from 'src/app/shared/directives/common-directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFeedbackRouting } from './create-feedback-routing.module';
import { SelectComponent } from 'src/app/_components/select/select.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [CreateFeedbackComponent, SelectComponent],
  imports: [
    CommonModule,
    CreateFeedbackRouting,
    CommonDirectivesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreateFeedbackModule {}
