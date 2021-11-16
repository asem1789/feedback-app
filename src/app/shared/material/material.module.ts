import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentIcon, SuggestionIcon } from 'src/assets/icons/svgs';
import { MatButtonModule } from '@angular/material/button';
const Mat_Module = [MatIconModule, MatButtonModule];

const CustomIcons = [
  { name: 'suggestion_icon', svg: SuggestionIcon },
  { name: 'comment_icon', svg: CommentIcon },
];

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
