import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BackendapiService } from '../backendapi.service';
import { Termin } from '../termin.model';



@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.css']
})
export class TermineComponent implements OnInit {
  loginTrigger;
  termine: Termin[];

  constructor(private userservice: UserService, private backend: BackendapiService) { }

  ngOnInit() {
    this.userservice.logInStatus.subscribe(res => this.loginTrigger = res);
    this.termine = this.backend.btermine;
  }

}
