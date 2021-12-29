import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busineespartner',
  templateUrl: './busineespartner.component.html',
  styleUrls: ['./busineespartner.component.css']
})
export class BusineespartnerComponent implements OnInit {

  customer = true;

  constructor() { }

  toggleCustomer(){
    this.customer = true;
  }

  toggleVendor(){
    this.customer = false;
  }

  onCountryChange(event: any){
    console.log(event);
  }
 form: any = {
   name : null,
   email: null,
   mobilenumber: null
 }
  onSubmit(): void{
    const {name,email,mobilenumber} = this.form;
    console.log(this.form);  
  }

  ngOnInit(): void {
  }

}
