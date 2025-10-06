import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  @Input() id?: number;
  
  ngOnInit(): void {
    console.log("id => ", this.id);
  }
}
