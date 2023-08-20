import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormDrugComponent } from './edit-form-drug.component';

describe('EditFormDrugComponent', () => {
  let component: EditFormDrugComponent;
  let fixture: ComponentFixture<EditFormDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormDrugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
