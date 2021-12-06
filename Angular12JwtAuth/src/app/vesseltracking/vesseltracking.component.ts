import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vesseltracking',
  templateUrl: './vesseltracking.component.html',
  styleUrls: ['./vesseltracking.component.css']
})
export class VesseltrackingComponent implements OnInit {
  
  isVisible = false;    

  form: any = {
    name: null,
    trackinginfo:null,
    webiste:null,
    containerno:null,
    shieldno: null,
  }

  toggleBookVessel(){
    this.isVisible = !this.isVisible;
  }
  
  onSubmit(){
    const { name, trackinginfo, webiste, containerno, shieldno } = this.form;
    console.log(this.form);
  }
  constructor() { }

  ngOnInit(): void { 
  }

}
