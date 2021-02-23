import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { MobileAboutFeatureComponent } from './mobile-about-feature.component'

describe('MobileAboutFeatureComponent', () => {
  let component: MobileAboutFeatureComponent
  let fixture: ComponentFixture<MobileAboutFeatureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAboutFeatureComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(MobileAboutFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
