import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterofcreditComponent } from './letterofcredit.component';

describe('LetterofcreditComponent', () => {
  let component: LetterofcreditComponent;
  let fixture: ComponentFixture<LetterofcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterofcreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterofcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
