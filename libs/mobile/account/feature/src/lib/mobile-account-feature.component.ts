import { Component } from '@angular/core'

@Component({
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Account </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Account</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">ACCOUNT PAGE</div>
    </ion-content>
  `,
})
export class MobileAccountFeatureComponent {}
