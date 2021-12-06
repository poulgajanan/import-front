import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit {
  

  
  form: any = {
   price: null,
   date: null,
   document: null,
   terms: null
  }
 
  onSubmit(){
    const { price, date, document ,terms } = this.form;
    console.log(this.form);    
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
