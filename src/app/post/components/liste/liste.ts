import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-liste',
    templateUrl: './liste.html',
    styleUrl: './liste.css',
    imports: [NgFor, NgIf, RouterLink, AsyncPipe]
})
export class Liste implements OnInit {
  @Input() idPostCourant?: number;
  protected posts$!: Observable<Post[]>;
  
  constructor(private readonly postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
