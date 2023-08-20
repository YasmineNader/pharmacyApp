import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormClassComponent } from './edit-form-class.component';

describe('EditFormClassComponent', () => {
  let component: EditFormClassComponent;
  let fixture: ComponentFixture<EditFormClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
