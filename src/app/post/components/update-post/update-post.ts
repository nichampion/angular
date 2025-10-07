import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../../../models/Post';
import { ResetInput } from '../../../../../projects/lib/src/reset-input/reset-input';

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [ResetInput, ReactiveFormsModule],
  templateUrl: './update-post.html',
  styleUrl: './update-post.css'
})
export class UpdatePost implements OnInit {
  @Input() post!: Post;
  @Output() postUpdated = new EventEmitter<Post>();

  form = new FormGroup({
    title: new FormControl<string>(''),
    content: new FormControl<string>(''),
    author: new FormControl<number>(0),
    photo: new FormControl<string>('')
  });

  ngOnInit(): void {
    if (this.post) {
      // Initialisation du formulaire avec les valeurs du post
      this.form.patchValue({
        title: this.post.title,
        content: this.post.content,
        author: this.post.author,
        photo: this.post.photo
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const updatedPost: Post = {
        ...this.post,
        title: formValue.title ?? this.post.title,
        content: formValue.content ?? this.post.content,
        author: formValue.author ?? this.post.author,
        photo: formValue.photo ?? this.post.photo
      };
      this.postUpdated.emit(updatedPost);
    }
  }
}
