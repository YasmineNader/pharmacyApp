import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserStoreComponent } from './edit-user-store.component';

describe('EditUserStoreComponent', () => {
  let component: EditUserStoreComponent;
  let fixture: ComponentFixture<EditUserStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
