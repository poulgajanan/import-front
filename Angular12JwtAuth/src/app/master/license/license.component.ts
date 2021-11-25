import { Component, OnInit } from '@angular/core';

import { License } from '../../objectClass/license';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  constructor() { }

   license: License=new License(0,0);

  ngOnInit(): void {
  }

}
