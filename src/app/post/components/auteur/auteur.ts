import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../../../models/Author';
import { AuthorService } from '../../../services/author.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Logger } from '../../../services/logger';
import { LoggerLevel } from '../../../models/LoggerLevel';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.html',
  styleUrl: './auteur.css',
  standalone: true,
  imports: [AsyncPipe]
})
export class Auteur implements OnInit {
  protected author$!: Observable<Author>;

  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute
  ) {
    inject(Logger).log(LoggerLevel.INFO, 'Info');
    inject(Logger).log(LoggerLevel.WARN, 'Warn');
    inject(Logger).log(LoggerLevel.ERROR, 'Error');
    inject(Logger).log(LoggerLevel.DEBUG, 'Debug');
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.author$ = this.authorService.getAuthorById(id);
  }
}
