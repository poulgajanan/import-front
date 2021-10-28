import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipcomponentComponent } from './membershipcomponent.component';

describe('MembershipcomponentComponent', () => {
  let component: MembershipcomponentComponent;
  let fixture: ComponentFixture<MembershipcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
