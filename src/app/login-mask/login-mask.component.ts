import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-mask',
  templateUrl: './login-mask.component.html',
  styleUrls: ['./login-mask.component.css']
})
export class LoginMaskComponent implements OnInit {
  usernameValid = true;
  passwordValid = true;
  loginValid: boolean;
  loggedIn: boolean;
  triggerLogInMask = 'false';

  constructor(private fb: FormBuilder, private userService: UserService) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }

  /**
   * submit
   */
  public submit() {
    console.log('helllo');
    let i: any;
    for (i = 0; i < this.userService.users.length; i++) {
      if (this.loginForm.value.username === this.userService.users[i]) {
        this.usernameValid = true;
        console.log('why?');
        break;
      } else {
        this.usernameValid = false;
      }
    }
    if (this.loginForm.value.password === this.userService.password) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }

    if (this.passwordValid && this.usernameValid) {
      this.userService.changeLoginStatus('true');
      this.loginValid = true;
    }
  }
}
