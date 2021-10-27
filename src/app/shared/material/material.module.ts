import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SuggestionIcon } from 'src/assets/icons/svgs';

const Mat_Module = [MatIconModule];

const CustomIcons = [{ name: 'suggestion_icon', svg: SuggestionIcon }];

@NgModule({
  declarations: [],
  imports: [...Mat_Module],
  exports: [...Mat_Module],
})
export class MaterialModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer
  ) {
    CustomIcons.forEach((el) => {
      this.matIconRegistry.addSvgIconLiteral(
        el.name,
        this.domSanitzer.bypassSecurityTrustHtml(el.svg)
      );
    });
  }
}
