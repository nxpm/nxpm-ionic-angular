import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { IonicModule } from '@ionic/angular'
import { MobileShellFeatureModule } from '@nxpm-mobile/mobile/shell/feature'

import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule, MobileShellFeatureModule],
})
export class AppModule {}
