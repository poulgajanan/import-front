import { Component, OnInit } from '@angular/core';

import { License } from '../../constants/license';

import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  

  form: any = {
    lic: null,
    iec:null,
    
  }
      
  onSubmit(){
    const {lic, iec} = this.form;
    console.log(this.form);    
  }
      
  constructor() { }

  //  license: License=new License(0,0);
  
  ngOnInit(): void {
  }

}
