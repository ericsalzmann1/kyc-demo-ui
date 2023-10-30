import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmploymentTableComponent } from './self-employment-table.component';

describe('SelfEmploymentTableComponent', () => {
  let component: SelfEmploymentTableComponent;
  let fixture: ComponentFixture<SelfEmploymentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfEmploymentTableComponent]
    });
    fixture = TestBed.createComponent(SelfEmploymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
