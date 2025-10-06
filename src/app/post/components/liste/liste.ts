import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../models/Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-liste',
  standalone: false,
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})
export class Liste implements OnInit {
  @Input() idPostCourant?: number;
  protected posts$!: Observable<Post[]>;
  
  constructor(private readonly postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
