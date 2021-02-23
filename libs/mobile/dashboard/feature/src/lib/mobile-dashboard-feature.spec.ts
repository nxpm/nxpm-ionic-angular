import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { MobileDashboardFeatureComponent } from './mobile-dashboard-feature.component'

describe('MobileDashboardFeatureComponent', () => {
  let component: MobileDashboardFeatureComponent
  let fixture: ComponentFixture<MobileDashboardFeatureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileDashboardFeatureComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(MobileDashboardFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
