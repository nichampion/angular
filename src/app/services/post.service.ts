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
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number) {
    // Temporary solution
    return this.getPosts().pipe(
      map((posts: any[]) => posts.find((post: { id: number; }) => post.id === id))
    );
  }
}