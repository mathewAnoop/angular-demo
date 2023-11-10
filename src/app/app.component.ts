import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'be-angular-app';
  subtitle = 'Angular Version 17';
  intro = 'Angularis a development platform and application design framework for building smart and effective single-page applications. Google is the company behind Angular.'
  feature = 'Built-in control flow: To improve the developer experience, Angular 17 has released a new block template syntax that gives you powerful features with simple, declarative APIs. Under the hood, the Angular compiler transforms the syntax into efficient JavaScript instructions that could perform control flow, lazy loading, and more.;'
}
