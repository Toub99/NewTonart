import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { Termin } from './termin.model';
import { CommentsComponent } from './comments/comments.component';


@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  bcomment;
  bcomments = [];
  btermine = [];

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

  addTermin(title, description) {
    const newTermin = {
      title: title,
      description: description
    };
    this.btermine.unshift(newTermin);
    return this.btermine;

  }
}
