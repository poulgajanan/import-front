import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpmailComponent } from './otpmail.component';

describe('OtpmailComponent', () => {
  let component: OtpmailComponent;
  let fixture: ComponentFixture<OtpmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
