import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatepopayment',
  templateUrl: './generatepopayment.component.html',
  styleUrls: ['./generatepopayment.component.css']
})
export class GeneratepopaymentComponent implements OnInit {

  isPaymentTerms = true;

  constructor() { }

  togglePaymentTerms(){
    this.isPaymentTerms = true;    
  }

  togglePaymentMilestone(){
    this.isPaymentTerms = false;
  }

  ngOnInit(): void {
  }

}
