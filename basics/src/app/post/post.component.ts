import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input('img')
  postImg = '';

  @Output()
  imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('Constructor() called', this.postImg);
  }

  ngOnInit(): void {
    console.log('OnInit() called', this.postImg);
  }
}
