import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentIcon, EditIcon, SuggestionIcon } from 'src/assets/icons/svgs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const Mat_Module = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
];

const CustomIcons = [
  { name: 'suggestion_icon', svg: SuggestionIcon },
  { name: 'comment_icon', svg: CommentIcon },
  { name: 'edit_icon', svg: EditIcon },
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
