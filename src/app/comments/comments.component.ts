import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment.model';
import { BackendapiService } from '../backendapi.service';
import { ActiveDirective } from '../active.directive';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
// workaround for bug of invisible text in input field after init:
@Output() clearCommentSection: EventEmitter<any> = new EventEmitter();

comments: Comment[] = [];
public comment: Comment;
public active = false;
public throwException = false;
public i = 0;
public test;
apiUrl = 'http://localhost:3000/comments';


  constructor(private backend: BackendapiService, private http: HttpClient) {
    this.comment = new Comment;

  }

  ngOnInit() {
    console.log('moin');
    // this.getCommentsFromDB();
    document.getElementById('textarea').nodeValue = '';
    this.clearCommentSection.emit(null);
  }

  public addComment(_user: string, _comment: string): void {
    this.comment = {
      user: _user,
      text: _comment
    };
    // this.http.put(this.apiUrl, );
    if (this.comment.text && this.comment.user) {
      this.backend.addComment(this.comment, this.comments);
      this.comments = this.backend.bcomments;
      _user = null;
      _comment = null;
    } else {
      this.throwException = true;
    }
  }

  /**
   * clearHelper --> workaround for bug of invisible text in input field after init
_comment   */
  public clearHelper(evt, _comment) {
    _comment = evt;
  }

  public closeException(): void {
    this.throwException = false;
  }
/**
 *

  public async getCommentsFromDB() {
    let i: any;
    const url = this.apiUrl;
    this.http.get(url)
      .subscribe(res => {
        console.log(res);
          for (i = 0; i <= res.length; i++) {
            if (res !== undefined) {
              this.comment = {
                user: res[i].user_name,
                text: res[i].comment
              };
              this.backend.addComment(this.comment, this.comments);
              this.comments = this.backend.bcomments;
            }
          }
      });
  }
*/

  private clearFields() {
    this.comment.text = '';
    this.comment.user = '';
  }

  private initCommentData(comment_data) {
    while (this.i <= comment_data.length) {
      this.comment = {
        user: comment_data[this.i].user_name,
        text: comment_data[this.i].comment
      };
      this.comments.unshift(this.comment);
      this.i++;
    }
  }
  /**
   * addCommentHttp

  public addCommentHttp() {
    this.http.get(this.apiUrl)
    .subscribe(res => this.comment = {
      user: res['title'],
      text: res['body']
    });
    this.comments.push(this.comment);

  }*/
}
