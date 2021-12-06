import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';
import { GoBackDirective } from './go-back.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ClickOutsideDirective, GoBackDirective],
  exports: [ClickOutsideDirective, GoBackDirective],
})
export class CommonDirectivesModule {}
