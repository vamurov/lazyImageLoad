import { IImageLazyLoadConfig } from 'ng2-image-lazy-load';
import { Component, Input, OnInit } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

  public images: any[] = [];

  public defaultImage = '../../assets/img/loading_icon.gif';

  public offset: number = 100;

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title) {
  }

  public ngOnInit(): void {
  for (let i = 200; i < 700; i++) {
      this.images.push({
        name: `image 1`,
        url: `http://placehold.it/${i}x${i}`
      });

    }
  }
}
