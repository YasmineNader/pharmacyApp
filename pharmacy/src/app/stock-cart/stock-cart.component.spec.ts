import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCartComponent } from './stock-cart.component';

describe('StockCartComponent', () => {
  let component: StockCartComponent;
  let fixture: ComponentFixture<StockCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
