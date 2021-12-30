import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  

  
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
