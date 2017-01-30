import { IImageLazyLoadConfig } from 'ng2-image-lazy-load';
import { Component, Input, OnInit } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h2>Approach 2 - web worker</h2>
     <div imageLazyLoadArea [imageLazyLoadConfig]="lazyLoadConfig">
        <span *ngFor="let image of images">
          <img [imageLazyLoadItem]="image.url" width="50px;" height="50px;"/>
        </span>
      </div>
  `,

  styles: [`

  .placeholder {
      width: 25px;
    
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('http://tantrafestival.ee/wp-content/plugins/table-popup/loading.gif');
  }`]
})
export class DetailComponent implements OnInit {


  public images: any[] = [];

  @Input()
  public lazyLoadConfig: IImageLazyLoadConfig = {
    headers: {
    },
    loadingClass: 'placeholder',

  };

  public ngOnInit() {
    
    for (let i = 100; i < 500; i++) {
      this.images.push({
        name: `image 1`,
        url: `http://placehold.it/${i}x${i}`
      });

    }
  }

  

}
