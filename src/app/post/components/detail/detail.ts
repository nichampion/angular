import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class Detail implements OnInit {
  @Input() id?: number;
  protected post$!: Observable<Post>;
  protected author$!: Observable<Author>;
  constructor(private readonly postService: PostService, private readonly authorService: AuthorService) { }

  ngOnInit(): void {
    // Get the post
    this.post$ = this.postService.getPostById(this.id!);
    this.post$.subscribe(post => {
      // Get the author
      this.author$ = this.authorService.getAuthorById(post.author);
    });
  }
}
