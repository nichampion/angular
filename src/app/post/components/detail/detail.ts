import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, map, BehaviorSubject } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../models/Author';
import { AsyncPipe } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Liste } from '../liste/liste';
import { UpdatePost } from '../update-post/update-post';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
    styleUrl: './detail.css',
    standalone: true,
    imports: [RouterLink, Liste, AsyncPipe, UpdatePost]
})
export class Detail implements OnInit {
  private postSubject = new BehaviorSubject<Post | null>(null);
  protected post$ = this.postSubject.asObservable();
  protected author$!: Observable<Author>;
  protected id!: number;
  
  constructor(
    private readonly postService: PostService,
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => {
        this.id = id;
        return this.postService.getPostById(id);
      })
    ).subscribe(post => {
      this.postSubject.next(post);
    });

    this.author$ = this.post$.pipe(
      switchMap(post => post ? this.authorService.getAuthorById(post.author) : [])
    );
  }

  onPostUpdated(updatedPost: Post) {
    console.log('Post updated:', updatedPost);
  }
}

