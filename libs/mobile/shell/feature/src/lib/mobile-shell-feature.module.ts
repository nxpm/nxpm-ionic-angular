import { NgModule } from '@angular/core'
import { RouteReuseStrategy, RouterModule } from '@angular/router'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { IsLoggedInGuard, MobileAuthDataAccessModule } from '@nxpm-mobile/mobile/auth/data-access'
import { MobileCoreFeatureModule } from '@nxpm-mobile/mobile/core/feature'
import { MobileLayoutFeatureComponent } from '@nxpm-mobile/mobile/layout/feature'
import { MobileShellFeatureComponent } from './mobile-shell-feature.component'

@NgModule({
  declarations: [MobileShellFeatureComponent],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  imports: [
    MobileAuthDataAccessModule,
    MobileCoreFeatureModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: MobileShellFeatureComponent,
        children: [
          {
            path: '',
            component: MobileLayoutFeatureComponent,
            canActivate: [IsLoggedInGuard],
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
              {
                path: 'about',
                loadChildren: () => import('@nxpm-mobile/mobile/about/feature').then((m) => m.MobileAboutFeatureModule),
              },
              {
                path: 'account',
                loadChildren: () =>
                  import('@nxpm-mobile/mobile/account/feature').then((m) => m.MobileAccountFeatureModule),
              },
              {
                path: 'dashboard',
                loadChildren: () =>
                  import('@nxpm-mobile/mobile/dashboard/feature').then((m) => m.MobileDashboardFeatureModule),
              },
            ],
          },
          {
            path: '',
            loadChildren: () => import('@nxpm-mobile/mobile/auth/feature').then((m) => m.MobileAuthFeatureModule),
          },
        ],
      },
    ]),
  ],
})
export class MobileShellFeatureModule {}
