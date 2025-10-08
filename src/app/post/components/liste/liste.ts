import { Component, Input, OnInit, signal } from '@angular/core';
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
  
  protected selectedPostId = signal<number[]>([])
  protected selectedAuthorId = signal<number[]>([]);
  
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

  protected onSelectPost(post: Post): void {
    // PostIds
    this.selectedPostId.update(oldIds => [...new Set([...oldIds, post.id])]);
    console.log('Selected post ids:', this.selectedPostId());

    // AuthorIds
    this.selectedAuthorId.update(oldIds => [...new Set([...oldIds, post.author])]);
    console.log('Selected author ids:', this.selectedAuthorId());
  }
}
