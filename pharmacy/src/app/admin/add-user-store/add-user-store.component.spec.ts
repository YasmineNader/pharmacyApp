import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStoreComponent } from './add-user-store.component';

describe('AddUserStoreComponent', () => {
  let component: AddUserStoreComponent;
  let fixture: ComponentFixture<AddUserStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
