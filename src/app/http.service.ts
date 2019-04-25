import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
// import { Comment2 } from './comment2.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiRoot = 'http://localhost:3000';
  response;

  constructor(private http: HttpClient) { }

  public getComment() {
    const url = this.apiRoot;
    this.http.get(url)
    .subscribe(res => {
      console.log(res);
    });
  }

  /*public testGet(): Observable<Comment2[]> {
    const url = this.apiRoot;
    return this.http.get(url)
    .map(res => {
      return res.json().results.map(item => {
        return new Comment2(item.id, item.body);
      });
    });
  }
  */
}
