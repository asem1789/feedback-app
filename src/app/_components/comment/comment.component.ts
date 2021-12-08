import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Feedback, Comments } from 'src/app/models/feedback';

@Component({
  selector: 'app-comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  activeComment: boolean = false;

  reply = new FormControl('', Validators.required);
  constructor() {}

  ngOnInit(): void {
    this.reply.valueChanges.subscribe((el) => {
      // console.log(el, ' ', this.comment);
    });
  }

  toggleReply() {
    this.activeComment = !this.activeComment;
  }
}
