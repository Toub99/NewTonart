import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = ['user1', 'user2', 'user3'];
  password = 'Tonart123';

  private loggedIn = new BehaviorSubject<string>('false');
  private showLoginMask = new BehaviorSubject<string>('false');
  logInStatus = this.loggedIn.asObservable();
  showLoginMaskStatus = this.showLoginMask.asObservable();

  changeLoginStatus(status: string) {
    console.log('changing Login status');
    this.loggedIn.next(status);
  }

  changeLoginMaskStatus(status: string) {
    console.log('changing Mask status');
    this.showLoginMask.next(status);
  }
}
