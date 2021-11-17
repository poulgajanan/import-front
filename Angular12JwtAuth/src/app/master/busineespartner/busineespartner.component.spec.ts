import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusineespartnerComponent } from './busineespartner.component';

describe('BusineespartnerComponent', () => {
  let component: BusineespartnerComponent;
  let fixture: ComponentFixture<BusineespartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusineespartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusineespartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
