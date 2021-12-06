import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(id: string): User {
    return UserData.filter((el) => el.id === id)[0];
  }
}
