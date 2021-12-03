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

  ngOnInit(): void {
  }

}
