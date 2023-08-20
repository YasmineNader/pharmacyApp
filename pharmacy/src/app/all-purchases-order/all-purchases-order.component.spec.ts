import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurchasesOrderComponent } from './all-purchases-order.component';

describe('AllPurchasesOrderComponent', () => {
  let component: AllPurchasesOrderComponent;
  let fixture: ComponentFixture<AllPurchasesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPurchasesOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPurchasesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
