import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysetupComponent } from './companysetup.component';

describe('CompanysetupComponent', () => {
  let component: CompanysetupComponent;
  let fixture: ComponentFixture<CompanysetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanysetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
