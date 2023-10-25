import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello LoveLives</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basics';
  str = 'Mensa';
  imgURL = 'https://picsum.photos/id/1/500/500';

  getName() {
    return this.str.toUpperCase();
  }

  changeImage = (e: KeyboardEvent) => {
    this.imgURL = (e.target as HTMLInputElement).value;
  };

  logImg = (e: string) => {
    console.log(e);
  };
}
