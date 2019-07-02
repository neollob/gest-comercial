import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromsuppliersComponent } from './from-suppliers.component';

describe('FromsuppliersComponent', () => {
  let component: FromsuppliersComponent;
  let fixture: ComponentFixture<FromsuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromsuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromsuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
