import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { MobileAccountFeatureComponent } from './mobile-account-feature.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileAccountFeatureComponent,
      },
    ]),
  ],
  declarations: [MobileAccountFeatureComponent],
})
export class MobileAccountFeatureModule {}
