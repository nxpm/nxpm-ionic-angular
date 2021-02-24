import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyIonicModule } from '@ngx-formly/ionic'

import { MobileUiFormComponent } from './mobile-ui-form.component'

// Types

// Validators

// Wrappers

@NgModule({
  declarations: [MobileUiFormComponent],
  exports: [MobileUiFormComponent],
  imports: [ReactiveFormsModule, FormlyModule.forRoot(), FormlyIonicModule],
})
export class MobileUiFormModule {}
