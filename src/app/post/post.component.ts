import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(): void {
    console.log("deletePost called!")
    this.deleted.emit(this.post)
  }

}
