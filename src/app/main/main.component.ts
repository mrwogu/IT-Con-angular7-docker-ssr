import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <header></header>
    <section>
      <router-outlet></router-outlet>
    </section>
    <footer></footer>`,
})
export class MainComponent {
}
