import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@nxpm-mobile/web/ui/button'
import { WebUiFormModule } from '@nxpm-mobile/web/ui/form'
import { AccountUiEmailPrimaryFormComponent } from './account-ui-email-primary-form.component'

@NgModule({
  exports: [AccountUiEmailPrimaryFormComponent],
  declarations: [AccountUiEmailPrimaryFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AccountUiEmailPrimaryFormModule {}