import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../models/Author';
import { NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Liste } from '../liste/liste';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
    styleUrl: './detail.css',
    imports: [NgIf, RouterLink, Liste, AsyncPipe]
})
export class Detail implements OnChanges {
  @Input() id?: number;
  protected post$!: Observable<Post>;
  protected author$!: Observable<Author>;
  
  constructor(private readonly postService: PostService, private readonly authorService: AuthorService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.post$ = this.postService.getPostById(this.id!);
      this.author$ = this.post$.pipe(
        switchMap(post => this.authorService.getAuthorById(post.author))
      );
    }
  }
}
