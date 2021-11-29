import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteHistoryService {
  private routeStack: string[] = [];
  constructor() {}

  goFront(currRoute: string): void {
    this.routeStack.push(currRoute);
  }

  goBack(): string | null {
    let route = this.routeStack.pop();
    return route ? route : null;
  }
}
