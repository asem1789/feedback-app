import { Component, OnInit } from '@angular/core';
import { StatusCard } from 'src/app/models/status';

@Component({
  selector: 'app-roadmap-card',
  templateUrl: './roadmap-card.component.html',
  styleUrls: ['./roadmap-card.component.scss'],
})
export class RoadmapCardComponent implements OnInit {
  // Status length will Update based on database loading onInit
  STATUS: StatusCard[] = [
    { text: 'Planned', class: 'orange', length: 2 },
    { text: 'In-Progress', class: 'violet', length: 3 },
    { text: 'Live', class: 'blue', length: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
