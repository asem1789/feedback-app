import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  activeComments: string[] = [];

  reply = new FormControl('', Validators.required);
  constructor(private renderer: Renderer2) {}

  // @ViewChildren('target') target!: ElementRef;

  ngOnInit(): void {
    console.log(this.comments);
    this.reply.valueChanges.subscribe((el) => {
      console.log(el, ' ', this.reply);
    });
  }

  toggleReply(id: string) {
    if (!this.activeComments.includes(id)) {
      this.activeComments = [...this.activeComments, id];
    } else {
      this.activeComments = this.activeComments.filter((el) => el !== id);
    }
  }

  showOrHideReply(value: string) {
    if (this.activeComments.includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  filterComments() {
    let orderComments = [];
    let comments = [...this.comments];

    let x = this.orderComments(comments);
    // for (let i = 0; i < comments.length; i++) {
    //   let el = comments[i];

    //   orderComments.push(el);
    //   if (el.replies) {
    //   }
    // }
    return this.comments.map((el) => el);
  }

  orderComments(comments: any[]) {}
}
