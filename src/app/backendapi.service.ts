import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { CommentsComponent } from './comments/comments.component';


@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  bcomment;
  bcomments = [];

  addComment(bcomment: Comment, bcomments: Comment[]) {
    const newComment = {
      user: bcomment.user,
      text: bcomment.text
    };
    this.bcomments.unshift(newComment);
    return bcomments;
  }

  deleteComment(bindex: number) {
    this.bcomments.splice(bindex, 1);
  }
}
