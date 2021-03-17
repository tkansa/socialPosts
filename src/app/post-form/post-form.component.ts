import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  title: string = "";
  thought: string = "";
  post: Post = { title: "", thought: ""};

  ngOnInit(): void {
  }

  submitPost(): void {
    
    this.post.title = this.title;
    console.log(this.post.title);
    this.post.thought = this.thought;
    this.submitted.emit(this.post)
  }



}
