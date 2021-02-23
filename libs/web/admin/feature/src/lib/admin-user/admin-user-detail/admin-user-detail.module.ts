import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminUserFormModule } from '@nxpm-mobile/web/admin/ui'
import { WebUiButtonModule } from '@nxpm-mobile/web/ui/button'
import { WebUiPageHeaderModule } from '@nxpm-mobile/web/ui/page-header'

import { AdminUserDetailComponent } from './admin-user-detail.component'

@NgModule({
  declarations: [AdminUserDetailComponent],
  imports: [
    AdminUserFormModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminUserDetailModule {}
