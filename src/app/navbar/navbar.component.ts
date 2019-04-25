import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logInTrigger = 'false';
constructor(private userService: UserService) { }

ngOnInit() {
  this.userService.logInStatus.subscribe(res => this.logInTrigger = res);
}

/**
 * logout function
 *
 */
public logout() {
  this.userService.changeLoginStatus('false');
}
}
