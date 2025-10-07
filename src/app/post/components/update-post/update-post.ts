import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../../../models/Post';
import { ResetInput } from '../../../../../projects/lib/src/reset-input/reset-input';

@Component({
  selector: 'app-update-post',
  imports: [ResetInput, ReactiveFormsModule],
  templateUrl: './update-post.html',
  styleUrl: './update-post.css'
})
export class UpdatePost {
  @Input() post!: Post;

  form = new FormGroup({
    title: new FormControl<string>(''),
    content: new FormControl<string>(''),
    author: new FormControl<number>(0),
    photo: new FormControl<string>('')
  });
  
  constructor() { 
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    console.log(this.post);
  }
}
