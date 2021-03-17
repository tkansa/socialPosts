import { Component, OnInit } from '@angular/core';
import { Post } from '../post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [
    { title: "Deep thought 1", thought: "Drrrrr"},
    { title: "Ceiling", thought: "The ceiling has a crack in the plaster"},
    { title: "Deep thought 3", thought: "I wonder where that sock went"},
  ]

  post: Post = { title: "", thought: ""};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(post: Post): void {
    this.posts.push(post);
  }

  onDelete(post: Post): void {
    const index = this.posts.findIndex(p => p === post);
    this.posts.splice(index, 1);
  }

}
