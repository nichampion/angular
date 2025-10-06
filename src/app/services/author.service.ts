import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Author } from '../models/Author';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/authors';

  getAuthors() {
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthorById(id: number) {
    // Temporary solution
    return this.getAuthors().pipe(
      map((authors: any[]) => {
        return authors.find(author => Number(author.id) === Number(id));
      })
    );
  }
}
