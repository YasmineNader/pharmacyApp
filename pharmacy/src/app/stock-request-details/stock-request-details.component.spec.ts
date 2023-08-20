import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRequestDetailsComponent } from './stock-request-details.component';

describe('StockRequestDetailsComponent', () => {
  let component: StockRequestDetailsComponent;
  let fixture: ComponentFixture<StockRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
