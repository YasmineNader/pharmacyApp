import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDrugStockRequestComponent } from './all-drug-stock-request.component';

describe('AllDrugStockRequestComponent', () => {
  let component: AllDrugStockRequestComponent;
  let fixture: ComponentFixture<AllDrugStockRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDrugStockRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDrugStockRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
