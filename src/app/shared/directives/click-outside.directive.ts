import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Input() toggle!: HTMLElement;
  @Output() clicked = new EventEmitter();

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.target']) onClick(
    target: HTMLElement
  ) {
    const onElement = this.elRef.nativeElement.contains(target);
    const onToggle = this.toggle.contains(target);

    if (onElement || onToggle) {
      return;
    }

    this.clicked.emit();
  }
}
