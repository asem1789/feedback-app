import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotesService {
  listVotes: string[] = [];
  constructor() {}

  clickVotes(feedId: string) {
    let isFound = this.listVotes.includes(feedId);
    if (isFound) {
      this.listVotes = this.listVotes.filter((el) => el !== feedId);
      return false;
    } else {
      this.listVotes.push(feedId);
      return true;
    }
  }

  getALlVotes(): string[] {
    return this.listVotes;
  }
}
