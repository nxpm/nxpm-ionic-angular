import { NgModule } from '@angular/core'
import { RouteReuseStrategy, RouterModule } from '@angular/router'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { MobileShellFeatureComponent } from './mobile-shell-feature.component'

@NgModule({
  declarations: [MobileShellFeatureComponent],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  imports: [
    IonicModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: MobileShellFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          {
            path: 'about',
            loadChildren: () => import('@nxpm-mobile/mobile/about/feature').then((m) => m.MobileAboutFeatureModule),
          },
          {
            path: 'account',
            loadChildren: () => import('@nxpm-mobile/mobile/account/feature').then((m) => m.MobileAccountFeatureModule),
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@nxpm-mobile/mobile/dashboard/feature').then((m) => m.MobileDashboardFeatureModule),
          },
        ],
      },
    ]),
  ],
})
export class MobileShellFeatureModule {}
