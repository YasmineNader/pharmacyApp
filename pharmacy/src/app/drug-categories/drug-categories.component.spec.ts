import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCategoriesComponent } from './drug-categories.component';

describe('DrugCategoriesComponent', () => {
  let component: DrugCategoriesComponent;
  let fixture: ComponentFixture<DrugCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
