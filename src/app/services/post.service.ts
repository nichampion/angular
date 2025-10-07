import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../models/Post';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/posts';

  getPosts() {
    console.log('Fetching posts from:', this.apiUrl);
    return this.http.get<Post[]>(this.apiUrl).pipe(
      map(posts => {
        console.log('Posts received:', posts);
        return posts;
      })
    );
  }

  getPostById(id: number) {
    // Temporary solution
    return this.getPosts().pipe(
      map((posts: any[]) => {
        return posts.find(post => Number(post.id) === Number(id));
      })
    );
  }
}