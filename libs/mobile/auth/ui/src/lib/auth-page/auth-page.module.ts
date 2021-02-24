import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { MobileUiFormModule } from '@nxpm-mobile/mobile/ui/form'
import { MobileUiPageModule } from '@nxpm-mobile/mobile/ui/page'
import { AuthPageComponent } from './auth-page.component'

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, RouterModule, MobileUiFormModule, MobileUiPageModule, IonicModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
