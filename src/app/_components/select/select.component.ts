import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() formName!: FormGroup;
  @Input() controlName!: string;
  selectedValue: null | string = null;

  showList: boolean = false;

  feedbackForm!: FormGroup;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  @ViewChild('selectList') selectList!: ElementRef;

  toggleSelect() {
    this.showList = !this.showList;
    this.animateHeight();
  }

  hideList() {
    this.showList = false;
    this.animateHeight();
  }

  selectOption(value: string) {
    this.formName.get('category')?.setValue(value);
    this.selectedValue = value;

    this.toggleSelect();
  }

  private animateHeight() {
    let el = this.selectList.nativeElement as HTMLElement;

    if (!this.showList) {
      this.renderer.setStyle(el, 'height', 0);
    } else {
      const height = el.scrollHeight + 'px'; // height of an element's content
      this.renderer.setStyle(el, 'height', height);
    }
  }

  get category() {
    return this.formName.controls.category;
  }
}
