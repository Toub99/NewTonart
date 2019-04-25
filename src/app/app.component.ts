import { Component, OnChanges, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tonart';
  showMask: string;
  constructor(private MaskTrigger: UserService) {
  }

  ngOnInit() {
    this.MaskTrigger.showLoginMaskStatus.subscribe((status) => this.showMask = status);
  }
}
