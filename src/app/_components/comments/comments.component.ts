import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  isReplyOpen: boolean = false;

  reply = new FormControl('', Validators.required);

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(1111111, this.comments);
  }

  toggleReply() {
    this.isReplyOpen = !this.isReplyOpen;
  }
}
