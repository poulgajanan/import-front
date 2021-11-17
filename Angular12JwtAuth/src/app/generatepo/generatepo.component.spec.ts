import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepoComponent } from './generatepo.component';

describe('GeneratepoComponent', () => {
  let component: GeneratepoComponent;
  let fixture: ComponentFixture<GeneratepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
