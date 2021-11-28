import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSideOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleSide() {
    this.isSideOpen = !this.isSideOpen;
  }
}
