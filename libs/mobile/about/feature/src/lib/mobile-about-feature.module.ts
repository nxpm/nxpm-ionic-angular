import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { MobileAboutFeatureComponent } from './mobile-about-feature.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileAboutFeatureComponent,
      },
    ]),
  ],
  declarations: [MobileAboutFeatureComponent],
})
export class MobileAboutFeatureModule {}
