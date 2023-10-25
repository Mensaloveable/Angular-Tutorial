import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello LoveLives</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  str = 'Mensa';
  imgURL = 'https://picsum.photos/id/1/500/500';

  getName() {
    return this.str.toUpperCase();
  }
}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'basics';
// }
