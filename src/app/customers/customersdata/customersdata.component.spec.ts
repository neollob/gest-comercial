import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersdataComponent } from './customersdata.component';

describe('CustomersdataComponent', () => {
  let component: CustomersdataComponent;
  let fixture: ComponentFixture<CustomersdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
