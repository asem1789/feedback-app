import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): User {
    return {
      fullName: 'user1',
      image: '',
      userName: '@user123',
    };
  }
}
