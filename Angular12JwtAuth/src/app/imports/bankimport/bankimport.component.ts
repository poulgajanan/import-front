import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankimport',
  templateUrl: './bankimport.component.html',
  styleUrls: ['./bankimport.component.css']
})
export class BankimportComponent implements OnInit {

  isMatch = false;
  isUnMatch = false;

  constructor() { }

  ngOnInit(): void {
  }

  match(){
    this.isMatch = true;
  }

  unmatch(){
    this.isUnMatch = true;
  }

  // matchClose(){
  //   this.isMatch = false;
  // }

  // unmatchClose(){
  //   this.isUnMatch = false;
  // }



}
