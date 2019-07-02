import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringincomingComponent } from './storing-incoming.component';

describe('StoringincomingComponent', () => {
  let component: StoringincomingComponent;
  let fixture: ComponentFixture<StoringincomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringincomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringincomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
