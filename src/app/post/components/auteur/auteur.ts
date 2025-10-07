import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../../../models/Author';
import { AuthorService } from '../../../services/author.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.html',
  styleUrl: './auteur.css',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe]
})
export class Auteur implements OnInit {
  protected author$!: Observable<Author>;
  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.author$ = this.authorService.getAuthorById(id);
  }
}
