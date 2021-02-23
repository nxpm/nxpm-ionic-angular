import { Component } from '@angular/core'

@Component({
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> About </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">About PAge</div>
    </ion-content>
  `,
})
export class MobileAboutFeatureComponent {}
