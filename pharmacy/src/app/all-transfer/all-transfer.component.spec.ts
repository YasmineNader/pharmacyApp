import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransferComponent } from './all-transfer.component';

describe('AllTransferComponent', () => {
  let component: AllTransferComponent;
  let fixture: ComponentFixture<AllTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
