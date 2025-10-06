import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../../../models/Author';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-auteur',
  standalone: false,
  templateUrl: './auteur.html',
  styleUrl: './auteur.css'
})
export class Auteur implements OnInit {
  @Input() id?: number;
  protected author$!: Observable<Author>;
  constructor(private readonly authorService: AuthorService) { }

  ngOnInit(): void {
    this.author$ = this.authorService.getAuthorById(this.id!);
  }
}
