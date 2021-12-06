import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepopaymentComponent } from './generatepopayment.component';

describe('GeneratepopaymentComponent', () => {
  let component: GeneratepopaymentComponent;
  let fixture: ComponentFixture<GeneratepopaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratepopaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratepopaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
