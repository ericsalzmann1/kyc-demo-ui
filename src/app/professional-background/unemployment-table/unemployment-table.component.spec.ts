import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemploymentTableComponent } from './unemployment-table.component';

describe('UnemploymentTableComponent', () => {
  let component: UnemploymentTableComponent;
  let fixture: ComponentFixture<UnemploymentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnemploymentTableComponent]
    });
    fixture = TestBed.createComponent(UnemploymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
