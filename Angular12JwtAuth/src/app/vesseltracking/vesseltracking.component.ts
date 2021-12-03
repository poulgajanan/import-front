import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-vesseltracking',
  templateUrl: './vesseltracking.component.html',
  styleUrls: ['./vesseltracking.component.css']
})
export class VesseltrackingComponent implements OnInit {

  form: any = {
    name: null,
    trackinginfo:null,
    webiste:null,
    containerno:null,
    shieldno: null,
  }
 
  onSubmit(){
    const {name,trackinginfo,webiste,containerno,shieldno} = this.form;
    console.log(this.form);
  }
  constructor() { }

  ngOnInit(): void { 
  }

}
