import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingCartComponent } from './dispensing-cart.component';

describe('DispensingCartComponent', () => {
  let component: DispensingCartComponent;
  let fixture: ComponentFixture<DispensingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
