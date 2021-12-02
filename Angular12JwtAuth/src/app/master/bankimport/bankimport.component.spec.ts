import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankimportComponent } from './bankimport.component';

describe('BankimportComponent', () => {
  let component: BankimportComponent;
  let fixture: ComponentFixture<BankimportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankimportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
