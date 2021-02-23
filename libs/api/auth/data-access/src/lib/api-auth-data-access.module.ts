import { ApiCoreDataAccessModule } from '@nxpm-mobile/api/core/data-access'
import { ApiCoreUtilModule } from '@nxpm-mobile/api/core/util'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiCoreDataAccessModule,
    ApiCoreUtilModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  exports: [ApiAuthDataAccessService],
  providers: [ApiAuthDataAccessService, JwtStrategy],
})
export class ApiAuthDataAccessModule {}
