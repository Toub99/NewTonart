import { Component, OnInit, Input } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { BackendapiService } from '../backendapi.service';
import { Comment } from '../comment.model';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
@Input() _comment: Comment;
@Input() index: number;
data;
  constructor(private backend: BackendapiService, private _http: HttpService) {  }

  ngOnInit() {
    // this._http.testGet();
  }

  /**
   * deleteComment
   */
  public deleteComment(index: number) {
    this.backend.deleteComment(index);
  }




}
