import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { MobileDashboardFeatureComponent } from './mobile-dashboard-feature.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileDashboardFeatureComponent,
      },
    ]),
  ],
  declarations: [MobileDashboardFeatureComponent],
})
export class MobileDashboardFeatureModule {}
