import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello LoveLives</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  str = 'Mensa';

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
