import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
apiUrl = '../../assets/json/comment2.model.json';
user;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl)
    .subscribe(res => {
      this.user = res['user'];
      console.log(this.user);
    });
  }

}
