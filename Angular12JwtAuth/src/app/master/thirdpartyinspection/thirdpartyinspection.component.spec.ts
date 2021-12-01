import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartyinspectionComponent } from './thirdpartyinspection.component';

describe('ThirdpartyinspectionComponent', () => {
  let component: ThirdpartyinspectionComponent;
  let fixture: ComponentFixture<ThirdpartyinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdpartyinspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartyinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
