import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { SvgIconsModule } from '@ngneat/svg-icon'

import { MobileCoreFeatureGraphqlModule } from './mobile-core-feature-graphql.module'

@NgModule({
  imports: [HttpClientModule, MobileCoreFeatureGraphqlModule, SvgIconsModule.forRoot()],
})
export class MobileCoreFeatureModule {}
