import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsDetailsComponent } from './ships-details.component';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
