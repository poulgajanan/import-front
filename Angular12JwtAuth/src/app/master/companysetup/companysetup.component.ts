import { Component, OnInit } from '@angular/core';


import { CompanySetup } from '../../constants/companySetup';

@Component({
  selector: 'app-companysetup',
  templateUrl: './companysetup.component.html',
  styleUrls: ['./companysetup.component.css']
})
export class CompanysetupComponent implements OnInit {

  companysetup : CompanySetup = new CompanySetup("", "", 0, "", "", "", "", "", "", "")

  form: any = {
    name : null,
    email : null ,
    mobilenumber: null, 
    website : null,
    address1 : null,
    address2 : null,
    country: null,
    city: null,
    state: null,
    zipcode : null
  }
  constructor() { }
 
  onSubmit(){
    const { name,email,mobilenumber,website,address1,address2,country,city,state,zipcode } = this.form;
    console.log(this.form);  
  }

  onCountryChange(event: any){
    console.log(event);
  }

  ngOnInit(): void {
  }

}
