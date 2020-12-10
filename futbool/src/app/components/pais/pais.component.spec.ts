import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisComponent } from './pais.component';

describe('PaisComponent', () => {
  let component: PaisComponent;
  let fixture: ComponentFixture<PaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
