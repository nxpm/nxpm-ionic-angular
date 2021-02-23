import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { MobileAccountFeatureComponent } from './mobile-account-feature.component'

describe('MobileAboutFeatureComponent', () => {
  let component: MobileAccountFeatureComponent
  let fixture: ComponentFixture<MobileAccountFeatureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAccountFeatureComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(MobileAccountFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
