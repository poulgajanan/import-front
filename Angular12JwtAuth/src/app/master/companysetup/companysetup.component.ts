import { Component, OnInit } from '@angular/core';


import { CompanySetup } from '../../objectClass/companySetup';

@Component({
  selector: 'app-companysetup',
  templateUrl: './companysetup.component.html',
  styleUrls: ['./companysetup.component.css']
})
export class CompanysetupComponent implements OnInit {

  companysetup : CompanySetup = new CompanySetup("", "", 0, "", "", "", "", "", "", "")

  constructor() { }

  ngOnInit(): void {
  }

}
