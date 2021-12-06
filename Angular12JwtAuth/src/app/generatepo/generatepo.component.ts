import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatepo',
  templateUrl: './generatepo.component.html',
  styleUrls: ['./generatepo.component.css']
})
export class GeneratepoComponent implements OnInit {

  isProduct = true;

  form: any = {
    vendor:null,
    references:null,
    currency:null,
    quantity:null,
    deadline:null,
    date:null
  }

  constructor() { }

  ngOnInit(): void {
  }

  toTop(){
    window.scrollTo(0, 0);
  }

  toggleProduct(){
    this.isProduct = true;    
  }

  toggleOtherInfo(){
    this.isProduct = false;
  }
      
  onSubmit(){
    const { vendor, references, currency,quantity, deadline ,receipttype } = this.form;
    console.log(this.form);    
  }
  

}
