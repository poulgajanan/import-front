import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatepo',
  templateUrl: './generatepo.component.html',
  styleUrls: ['./generatepo.component.css']
})
export class GeneratepoComponent implements OnInit {

  form: any = {
    vendor:null,
    references:null,
    currency:null,
    quantity:null,
    deadline:null,
    date:null,
  }
      
  onSubmit(){
    const { vendor, references, currency,quantity, deadline ,receipttype } = this.form;
    console.log(this.form);    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
