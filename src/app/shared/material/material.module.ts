import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const Mat_Module = [MatIconModule];

@NgModule({
  declarations: [],
  imports: [...Mat_Module],
  exports: [...Mat_Module],
})
export class MaterialModule {}
