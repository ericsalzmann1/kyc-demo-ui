import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentTableComponent } from './employment-table.component';

describe('EmploymentTableComponent', () => {
  let component: EmploymentTableComponent;
  let fixture: ComponentFixture<EmploymentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentTableComponent]
    });
    fixture = TestBed.createComponent(EmploymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
