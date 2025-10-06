import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../models/Author';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.html',
  styleUrl: './detail.css'
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
