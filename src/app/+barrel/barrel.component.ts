import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Barrel` component loaded asynchronously');

@Component({
  selector: 'barrel',
  template: `
    <h2>Approach 3 - Blazy Integration</h2>
 
   <div id="blazyContainer" bLazyLoadImages [bLazyOffset]="300" style="overflow: scroll;">
  <span *ngFor="let image of images">
    <img  width="100px;" height="100px;" class="b-lazy" src="../../assets/img/loading_icon.gif" [attr.data-src]="image.url" />
  </span>
</div>
  `,
})
export class BarrelComponent implements OnInit {

 public images: any[] = [];
  public ngOnInit(): void {
  for (let i = 200; i < 700; i++) {
      this.images.push({
        name: `image 1`,
        url: `http://placehold.it/${i}x${i}`
      });

    }
  }

}
