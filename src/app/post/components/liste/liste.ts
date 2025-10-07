import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-liste',
    templateUrl: './liste.html',
    styleUrl: './liste.css',
    standalone: true,
    imports: [RouterLink, AsyncPipe]
})
export class Liste implements OnInit {
  @Input() idPostCourant?: number;
  protected posts$!: Observable<Post[]>;
  
  constructor(private readonly postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe(
      posts => {
        console.log('Posts received:', posts);
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
