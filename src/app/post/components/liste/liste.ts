import { Component, effect, inject, Input, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoggerLevel } from '../../../models/LoggerLevel';
import { Logger } from '../../../services/logger';

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

  constructor(private readonly postService: PostService) {
    effect(() => {
      console.log('PostIds changed:', this.selectedPostId());
    });

    effect(() => {
      console.log('AuthorIds changed:', this.selectedAuthorId());
    });

    inject(Logger).log(LoggerLevel.INFO, 'Info');
    inject(Logger).log(LoggerLevel.WARN, 'Warn');
    inject(Logger).log(LoggerLevel.ERROR, 'Error');
    inject(Logger).log(LoggerLevel.DEBUG, 'Debug');
  }

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

    // AuthorIds
    this.selectedAuthorId.update(oldIds =>
      oldIds.includes(post.author) ? oldIds : [...oldIds, post.author]
    );
  }
}
