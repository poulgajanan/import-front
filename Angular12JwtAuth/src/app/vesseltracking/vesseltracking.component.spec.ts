import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesseltrackingComponent } from './vesseltracking.component';




    
describe('VesseltrackingComponent', () => {
  let component: VesseltrackingComponent;
  let fixture: ComponentFixture<VesseltrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesseltrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesseltrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



   